export function transformationData(hotels, rooms) {
    return rooms.map((item) => ({
        ...item,
        hotelId: hotels.find((hotel) => hotel._id === item.hotelId)
    }));
}

export function findToString(data, value) {
    return data.filter((item) =>
        item.hotelId.town
            .toLowerCase()
            .trim()
            .includes(value.toLowerCase().trim())
    );
}
