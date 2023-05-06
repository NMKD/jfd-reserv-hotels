import httpService from "./http.service";
import localStorageService from "./localStorageService";
import config from "../config.json";

const userService = {
    getCurrentUser: async () => {
        if (localStorageService.getUserId()) {
            const { data } = await httpService.get(
                config.user.getUser + localStorageService.getUserId()
            );
            return data;
        }
        return null;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            config.user.getUser + localStorageService.getUserId(),
            payload
        );
        return data;
    }
};
export default userService;
