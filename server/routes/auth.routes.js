const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require("bcryptjs");
// Models
const User = require("../models/User");
// Services
const TokenService = require("../services/token.service");
// middleware
const { validate, validShema } = require("../middleware/validation");
// utils
const { generateUserData } = require("../utils/generation");

router.post(
  "/signUp",
  validate([validShema.email, validShema.password, validShema.passwordConfirm]),
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          error: {
            message: "EMAIL_ EXISTS",
            code: 400,
          },
        });
      }

      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        ...generateUserData(),
        ...req.body,
        password: hashPassword,
      });

      const tokens = TokenService.generate({ _id: newUser._id });
      await TokenService.save(newUser._id, tokens.refreshToken);

      res.status(201).send({
        ...tokens,
        userId: newUser._id,
      });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({
        message: "На сервере произошла ошибка с формой регистрации",
      });
    }
  }
);
router.post(
  "/signInWithPassword",
  validate([validShema.email, validShema.password]),
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          error: {
            message: "EMAIL_ EXISTS",
            code: 400,
          },
        });
      }

      const isPasswordEqual = await bcrypt.compare(password, user.password);

      if (!isPasswordEqual) {
        return res.status(400).json({
          error: {
            message: "INVALID_PASSWORD",
            code: 400,
          },
        });
      }

      const tokens = TokenService.generate({ _id: user._id });
      await TokenService.save(user._id, tokens.refreshToken);

      res.status(201).send({
        ...tokens,
        userId: user._id,
      });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({
        message: "На сервере произошла ошибка с формой входа Sign in",
      });
    }
  }
);
router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const jwtTokenValidate = TokenService.validateRefresh(refreshToken);
    const dbToken = await TokenService.findToken(refreshToken);

    if (
      !jwtTokenValidate ||
      !dbToken ||
      jwtTokenValidate._id !== dbToken?.user?.toString()
    ) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const token = TokenService.generate({
      _id: jwtTokenValidate._id,
    });

    await TokenService.save(jwtTokenValidate._id, token.refreshToken);

    res.status(200).send({
      ...token,
      userId: jwtTokenValidate._id,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: "На сервере произошла ошибка refresh_token",
    });
  }
});

module.exports = router;
