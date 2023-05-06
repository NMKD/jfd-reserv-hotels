const { Schema, model } = require("mongoose");

const schema = new Schema({
  rooms: [
    {
      room: {
        type: Object,
        required: true,
      },
      user: {
        name: String,
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
      date: {
        start: { type: Number },
        end: { type: Number },
      },
    },
  ],
});

module.exports = model("Order", schema);
