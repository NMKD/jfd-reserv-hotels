import httpService from "./http.service";
import config from "../config.json";
import localStorageService from "./localStorageService";

const roomService = {
    get: async () => {
        const { data } = await httpService.get(config.room.getRoom);
        return data;
    },
    findById: async (id) => {
        const { data } = await httpService.get(`${config.room.getRoom}${id}`);
        return data;
    },
    filterOfRooms: async (payload) => {
        const { data } = await httpService.post(config.room.filter, payload);
        return data;
    },
    reserv: async (payload) => {
        const { data } = await httpService.patch(config.room.reserv, payload);
        return data;
    },
    removeReserv: async (roomId) => {
        const { data } = await httpService.delete(
            `${config.room.reserv}/${roomId}/${localStorageService.getUserId()}`
        );
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(config.room.create, payload);
        return data;
    },
    updateRoom: async (payload) => {
        const { data } = await httpService.patch(config.room.update, payload);
        return data;
    },
    delete: async (roomId) => {
        const { data } = await httpService.delete(
            `${config.room.remove}${roomId}`
        );
        return data;
    }
};

export default roomService;
