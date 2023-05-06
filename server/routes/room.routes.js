const express = require("express");
const chalk = require("chalk");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");
// Models
const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const User = require("../models/User");
// Utils
const { toFilterData } = require("../utils/toFilterData");

router.get("/", async (req, res) => {
  try {
    const list = await Room.find().populate(["hotelId"]).limit(50);
    res.send(list);
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Не удалось получить список комнат",
    });
  }
});

router.post("/filter", async (req, res) => {
  try {
    const { children, animal, reserv, smoke } = req.body;
    const list = await Room.find({
      children,
      animal,
      smoke,
    }).populate(["hotelId"]);

    const newList = toFilterData(list, reserv);

    res.send(newList);
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Не удалось получить список комнат",
    });
  }
});

router.get("/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findById(roomId).populate(["hotelId"]);
    res.status(200).send(room);
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message:
        "На сервере произошла ошибка, не удалось получить информацию о комнате",
    });
  }
});

router.patch("/reserv", auth, async (req, res) => {
  try {
    const { roomId, userId, startDate, endDate } = req.body;

    if (req.user._id === userId) {
      const room = await Room.findById(roomId);
      room.reserv.push({
        userId,
        date: { startDate, endDate },
      });
      await Room.findByIdAndUpdate(roomId, room, {
        new: true,
      });
      const user = await User.findById(userId);
      user.reserv.push({ roomId: roomId });
      await User.findByIdAndUpdate(userId, user, {
        new: true,
      });

      res.status(201).json({ message: "Бронирование прошло успешно" });
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка при изменении параметра комнаты",
    });
  }
});

router.delete("/reserv/:roomId/:userId", auth, async (req, res) => {
  try {
    const { roomId, userId } = req.params;
    if (req.user._id === userId) {
      const room = await Room.findById(roomId);
      room.reserv = room.reserv.filter((item) => item.userId !== userId);
      await Room.findByIdAndUpdate(roomId, room, {
        new: true,
      });
      const user = await User.findById(userId);

      user.reserv = user.reserv.filter((item) => item.roomId !== roomId);
      await User.findByIdAndUpdate(userId, user, {
        new: true,
      });

      const list = await Room.find().populate(["hotelId"]).limit(50);
      res.status(200).send(list);
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка при изменении параметра комнаты",
    });
  }
});

router.post("/create", auth, async (req, res) => {
  try {
    const payload = req.body;
    if (req.user._id) {
      const room = await Room.create(payload);
      const hotel = await Hotel.findById(payload.hotelId);
      const hotelRooms = hotel.rooms;
      hotelRooms.push({ roomId: room._id });
      await Hotel.findByIdAndUpdate(
        payload.hotelId,
        { rooms: hotelRooms },
        { new: true }
      );
      const list = await Room.find().populate(["hotelId"]).limit(50);
      res.status(200).send(list);
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже!",
    });
  }
});

router.patch("/update", auth, async (req, res) => {
  try {
    const payload = req.body;

    if (req.user._id) {
      await Room.findByIdAndUpdate(payload._id, payload, {
        new: true,
      });
      const list = await Room.find().populate(["hotelId"]).limit(50);
      res.status(200).send(list);
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже!",
    });
  }
});

router.delete("/remove/:roomId", auth, async (req, res) => {
  try {
    const { roomId } = req.params;
    if (req.user._id) {
      await Room.findByIdAndDelete(roomId);
      const user = await User.findOne({
        reserv: { $elemMatch: { roomId } },
      });

      if (user !== null) {
        user.reserv = user.reserv.filter(
          (item) => item.roomId.toString() !== roomId
        );
        await User.findByIdAndUpdate(user._id, user, {
          new: true,
        });
      }
      const hotel = await Hotel.findOne({
        rooms: { $elemMatch: { roomId } },
      });
      if (hotel !== null) {
        hotel.rooms = hotel.rooms.filter(
          (item) => item.roomId.toString() !== roomId
        );
        await Hotel.findByIdAndUpdate(hotel._id, hotel, { new: true });
      }
      const list = await Room.find().populate(["hotelId"]).limit(50);
      res.status(200).send(list);
    }
  } catch (e) {
    console.log(chalk.red(e.message));
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже!",
    });
  }
});

module.exports = router;
