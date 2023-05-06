const fs = require("fs/promises");
const path = require("path");
const { HOTELS, IMG_ROOMS } = require("./db");
const {
  getRandomInt,
  createId,
  getRandomBoolean,
  getRandomOfArray,
} = require("../utils/generation");

const hotelsPath = path.join(__dirname, "./hotels.json");
const roomsPath = path.join(__dirname, "./rooms.json");

async function getHotels() {
  const notes = await fs.readFile(hotelsPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function getRooms() {
  const notes = await fs.readFile(roomsPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function saveHotels() {
  try {
    await fs.writeFile(
      hotelsPath,
      JSON.stringify(
        HOTELS.map((item) => ({
          ...item,
          rate: getRandomInt(5),
        }))
      )
    );
  } catch (e) {
    console.error(e.message);
  }
}

async function saveRooms() {
  const hotelsMock = await getHotels();
  try {
    const arr = [];
    hotelsMock.forEach((item, i, array) => {
      item.rooms.forEach((room) =>
        arr.push({
          _id: room,
          hotelId: item._id,
          number_room: i + 1,
          smoke: getRandomBoolean(),
          conditioner: getRandomBoolean(),
          beds: getRandomInt(12) + 1,
          children: getRandomBoolean(),
          price: getRandomInt(10000),
          animal: getRandomBoolean(),
          img: IMG_ROOMS[getRandomOfArray(IMG_ROOMS)],
          reserv: getRandomBoolean(),
        })
      );
    });
    await fs.writeFile(roomsPath, JSON.stringify(arr));
  } catch (e) {
    console.error(e.message);
  }
}

module.exports = {
  getHotels,
  getRooms,
  saveHotels,
  saveRooms,
};
