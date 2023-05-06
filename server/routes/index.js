const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/hotel", require("./hotel.routes"));
router.use("/room", require("./room.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/file", require("./image.routes"));
router.use("/order", require("./order.routes"));

module.exports = router;
