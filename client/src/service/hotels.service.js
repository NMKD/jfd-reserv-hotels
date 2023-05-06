import httpService from "./http.service";
import config from "../config.json";

const hotelService = {
    getHotel: async (userId) => {
        const { data } = await httpService.get(
            `${config.hotel.getHotel}${userId}`
        );
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(config.hotel.create, payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            `${config.hotel.getHotel}${payload.userId}`,
            payload
        );
        return data;
    }
};

export default hotelService;
