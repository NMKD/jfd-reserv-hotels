import axios from "axios";
import config from "../config.json";
import localStorageService from "./localStorageService";

const http = config.apiEndpoint.url;

const AUTH_SERVICE = {
    signUp: async (payload) => {
        const { data } = await axios.post(http + config.auth.signUp, payload);
        return data;
    },
    signIn: async ({ email, password }) => {
        const { data } = await axios.post(http + config.auth.signIn, {
            email,
            password
        });
        return data;
    },
    signOut: () => localStorageService.removeUser(),
    refresh: async () => {
        const { data } = await axios.post(http + config.auth.token, {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default AUTH_SERVICE;
