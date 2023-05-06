const forEachDataRooms = (data, userId) => {
  return data.map((item) => ({
    _id: item._id,
    animal: item.animal,
    beds: item.beds,
    children: item.children,
    conditioner: item.conditioner,
    img: item.img,
    numberRoom: item.numberRoom,
    price: item.price,
    hotelId: item.hotelId,
    smoke: item.smoke,
    reserv: item.reserv.find((r) => r.userId === userId),
  }));
};

module.exports = {
  forEachDataRooms,
};
