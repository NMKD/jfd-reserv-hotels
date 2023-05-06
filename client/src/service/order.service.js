import httpService from "./http.service";
import config from "../config.json";

const orderService = {
    get: async (userId) => {
        const { data } = await httpService.get(
            `${config.order.getOrder}${userId}`
        );
        return data;
    }
};

export default orderService;
