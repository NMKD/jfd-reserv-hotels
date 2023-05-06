import config from "../config.json";
import httpService from "./http.service";

const IMAGE_UPLOAD = {
    post: async (payload) => {
        const { data } = await httpService.post(config.upload.image, payload);
        return data;
    }
};

export default IMAGE_UPLOAD;
