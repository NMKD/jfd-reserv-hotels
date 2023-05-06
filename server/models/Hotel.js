const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    adress: { type: String, required: true },
    town: { type: String, required: true },
    rate: { type: Number },
    rooms: [{ roomId: { type: Schema.Types.ObjectId, ref: "Room" } }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Hotel", schema);
