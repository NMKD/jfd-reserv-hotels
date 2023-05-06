import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./userReducer";
import roomsReducer from "./roomsReducer";
import hotelReducer from "./hotelReducer";
import orderReducer from "./orderReducer";
import uploadImgReducer from "./uploadImgReducer";

const rootReducer = combineReducers({
    user: authReducer,
    rooms: roomsReducer,
    hotel: hotelReducer,
    orders: orderReducer,
    uploadImg: uploadImgReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
