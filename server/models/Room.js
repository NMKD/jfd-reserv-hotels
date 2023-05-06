const { Schema, model } = require("mongoose");

const schema = new Schema({
  hotelId: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  smoke: { type: Boolean },
  conditioner: { type: Boolean },
  beds: { type: Number },
  children: { type: Boolean },
  price: { type: Number, required: true },
  animal: { type: Boolean },
  img: [{ type: String }],
  numberRoom: { type: Number },
  countRooms: { type: Number },
  reserv: [
    {
      userId: { type: String },
      date: {
        startDate: { type: String },
        endDate: { type: String },
      },
    },
  ],
});

module.exports = model("Room", schema);
