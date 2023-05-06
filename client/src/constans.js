export const ROUTER_PATH = {
    root: "/",
    orders: "orders",
    login: "login",
    info: "info/",
    room: "room/",
    admin: "landlord/"
};

const FIREBASE_URL = "https://identitytoolkit.googleapis.com/v1/";

export const FIREBASE_URL_AUTH = {
    signUp: `${FIREBASE_URL}accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`,
    signIn: `${FIREBASE_URL}accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`
};
