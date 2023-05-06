const chalk = require("chalk");
const { ObjectId } = require("mongodb");
const Hotel = require("../models/Hotel");
const Room = require("../models/Room");
const { HOTELS, IMG_ROOMS } = require("../mock/db");

const {
  getRandomBoolean,
  getRandomInt,
  getRandomOfArray,
  getRandomObjectID,
} = require("../utils/generation");

const getDbHotels = async () => {
  return await Hotel.find();
};

const getDbRooms = async () => {
  return await Room.find();
};

module.exports = async () => {
  const dbHotels = await getDbHotels();
  if (dbHotels.length < HOTELS.length) {
    const dbRooms = await getDbRooms();
    console.log(chalk.bgBlue("dbHotels.length < fake db hotelsMock.length"));
    await createInitialEntity(dbHotels, dbRooms);
  }
};

async function createInitialEntity(hModel, rModel) {
  if (hModel.length > 0 || rModel.length > 0) {
    hModel.forEach(async (item) => {
      await item.remove();
    });
    rModel.forEach(async (item) => {
      await item.remove();
    });
  }

  const dbHotels = await createNewModelHotel();
  const dbRooms = await getDbRooms();

  try {
    if (dbRooms.length === 0 && dbHotels.length > 0) {
      console.log(chalk.bgGreen("start create rooms collection"));
      const rooms = await createNewModelRoom(dbHotels);
      console.log(
        chalk.bgGreen(
          "end create rooms collection - " +
            rooms.length +
            " length in Database"
        )
      );
    }
  } catch (e) {
    console.log(chalk.red(e.message));
  }
}

async function createNewModelHotel() {
  try {
    HOTELS.forEach(async (item) => {
      const model = new Hotel({
        ...item,
        rate: getRandomInt(5),
        rooms: getRandomObjectID(3),
        userId: new ObjectId(),
      });
      await model.save();
    });
    return await getDbHotels();
  } catch (e) {
    console.log(e.message);
  }
}

async function createNewModelRoom(hotels) {
  try {
    hotels.forEach((hotel) =>
      hotel.rooms.forEach(async (roomId, i) => {
        const model = new Room({
          _id: roomId,
          hotelId: hotel._id,
          numberRoom: i + 1,
          countRooms: getRandomInt(7) + 1,
          smoke: getRandomBoolean(),
          conditioner: getRandomBoolean(),
          beds: getRandomInt(5) + 1,
          children: getRandomBoolean(),
          price: getRandomInt(1000),
          animal: getRandomBoolean(),
          img: [
            IMG_ROOMS[getRandomOfArray(IMG_ROOMS)],
            IMG_ROOMS[getRandomOfArray(IMG_ROOMS)],
          ],
        });
        await model.save();
      })
    );
    return await getDbRooms();
  } catch (e) {
    console.log(e.message);
  }
}
