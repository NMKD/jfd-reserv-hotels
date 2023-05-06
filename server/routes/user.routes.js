const express = require("express");
const chalk = require("chalk");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const { upload } = require("../middleware/upload");

router.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === req.user._id) {
      const user = await User.findById(userId);
      res.send(user);
    } else {
      res.status(403).json({
        message: "Unauthorized",
      });
    }
  } catch (e) {
    console.log(chalk.red(e));
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === req.user._id) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
      res.send(updatedUser);
    } else {
      res.status(403).json({
        message: "Unauthorized",
      });
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка с получением списка пользователей",
    });
  }
});

module.exports = router;
