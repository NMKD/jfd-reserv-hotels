const express = require("express");
const Room = require("../models/Room");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");
const { forEachDataRooms } = require("../utils/forEachData");

router.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (req.user._id === userId) {
      const orders = await Room.find({
        reserv: { $elemMatch: { userId } },
      }).populate(["hotelId"]);

      res.send(forEachDataRooms(orders, userId));
    }
  } catch (error) {
    res.send("not found");
  }
});

module.exports = router;
