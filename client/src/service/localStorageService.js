const TOKEN_KYE = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-local-id";

export function setToken({
    expiresIn = 3600,
    accessToken,
    userId,
    refreshToken
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(USERID_KEY, userId);
    localStorage.setItem(TOKEN_KYE, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KYE);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function removeUser() {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KYE);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
}

const localStorageService = {
    setToken,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeUser
};

export default localStorageService;
