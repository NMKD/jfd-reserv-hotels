const express = require("express");
const chalk = require("chalk");
const router = express.Router({ mergeParams: true });
// middleware
const auth = require("../middleware/auth.middleware");
// Models
const Hotel = require("../models/Hotel");

router.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === req.user._id) {
      const hotel = await Hotel.findOne({ userId }).populate(["rooms.roomId"]);
      res.status(200).send(hotel);
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже!",
    });
  }
});

router.post("/create", auth, async (req, res) => {
  try {
    const payload = req.body;
    if (payload.userId === req.user._id) {
      const newHotel = await Hotel.create(payload);
      res.status(200).send(newHotel);
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже!",
    });
  }
});

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === req.user._id) {
      const updatedHotel = await Hotel.findOneAndUpdate({ userId }, req.body, {
        new: true,
      }).populate(["rooms.roomId"]);
      res.send(updatedHotel);
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже!",
    });
  }
});

module.exports = router;
