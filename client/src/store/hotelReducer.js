import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import hotelService from "../service/hotels.service";

export const loadHotel = createAsyncThunk(
    "hotel/getHotel",
    async (userId, thunkAPI) => {
        try {
            const hotel = await hotelService.getHotel(userId);
            return hotel;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const createHotel = createAsyncThunk(
    "hotel/createHotel",
    async (payload, thunkAPI) => {
        try {
            const hotel = await hotelService.create(payload);
            return hotel;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const updateHotel = createAsyncThunk(
    "hotel/updateHotel",
    async (payload, thunkAPI) => {
        try {
            const hotel = await hotelService.update(payload);
            return hotel;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

const initialState = {
    entities: null,
    isLoading: true,
    dataLoaded: false
};

const hotelSlice = createSlice({
    name: "hotel",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(loadHotel.pending, (state) => {
            state.isLoading = true;
            state.dataLoaded = false;
        });
        builder.addCase(loadHotel.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        });
        builder.addCase(loadHotel.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        });
        builder.addCase(createHotel.pending, (state) => {
            state.isLoading = true;
            state.dataLoaded = false;
        });
        builder.addCase(createHotel.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        });
        builder.addCase(createHotel.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        });
        builder.addCase(updateHotel.pending, (state) => {
            state.isLoading = true;
            state.dataLoaded = false;
        });
        builder.addCase(updateHotel.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        });
        builder.addCase(updateHotel.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        });
    }
});

const { reducer: hotelReducer, name } = hotelSlice;

export const getHotelFromState = () => (state) =>
    state[name].entities === null || !state[name].entities
        ? null
        : state[name].entities;
export const isLoadingStatusHotel = () => (state) => state[name].isLoading;
export const getDataLoadedHotel = () => (state) => state[name].dataLoaded;
export const getRoomsFromStateHotel = () => (state) =>
    state[name].entities.rooms.map((item) => item.roomId);

export const getMyRooms = () => (state) =>
    state[name].entities.map((item) => item.filter((room) => room.numberRoom));

export default hotelReducer;
