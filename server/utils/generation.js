const { ObjectId } = require("mongodb");
const { nanoid } = require("nanoid");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const createId = (s) => {
  const arr = [];
  for (let i = 1; i <= s; i++) {
    arr.push(nanoid());
  }
  return arr;
};

const getRandomOfArray = (myArray) =>
  Math.floor(Math.random() * myArray.length);

const getRandomBoolean = () => Math.random() >= 0.5;

//  random hex string generator
const randHex = (len) => {
  var maxlen = 8,
    min = Math.pow(16, Math.min(len, maxlen) - 1);
  (max = Math.pow(16, Math.min(len, maxlen)) - 1),
    (n = Math.floor(Math.random() * (max - min + 1)) + min),
    (r = n.toString(16));
  while (r.length < len) {
    r = r + randHex(len - maxlen);
  }
  return r;
};

const getRandomObjectID = (s) => {
  const arr = [];
  for (let i = 1; i <= s; i++) {
    arr.push({ roomId: new ObjectId(64) });
  }
  return arr;
};

function generateUserData() {
  return {
    cart: {
      rooms: [],
    },
    isAdmin: false,
    admin: {
      hotels: [],
    },
    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`,
  };
}

module.exports = {
  getRandomInt,
  createId,
  getRandomOfArray,
  getRandomBoolean,
  randHex,
  getRandomObjectID,
  generateUserData,
};
