import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import roomService from "../service/room.service";

export const loadingRooms = createAsyncThunk(
    "rooms/getAllrooms",
    async (thunkAPI) => {
        try {
            const rooms = await roomService.get();
            return rooms;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getByIdRoom = createAsyncThunk(
    "rooms/findById",
    async (roomId, thunkAPI) => {
        try {
            const room = await roomService.findById(roomId);
            return room;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const toReservRoom = createAsyncThunk(
    "room/toReservRoom",
    async (payload, thunkAPI) => {
        try {
            await roomService.reserv(payload);
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const createRoom = createAsyncThunk(
    "rooms/createRoom",
    async (payload, thunkAPI) => {
        try {
            const room = await roomService.create(payload);
            return room;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getFilteredRooms = createAsyncThunk(
    "rooms/getFilteredRooms",
    async (payload, thunkAPI) => {
        try {
            const room = await roomService.filterOfRooms(payload);
            return room;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const removeReserv = createAsyncThunk(
    "rooms/removeReserv",
    async (roomId, thunkAPI) => {
        try {
            const room = await roomService.removeReserv(roomId);
            return room;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const updateRoom = createAsyncThunk(
    "rooms/updateRoom",
    async (payload, thunkAPI) => {
        try {
            const rooms = await roomService.updateRoom(payload);
            return rooms;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const removeRoom = createAsyncThunk(
    "rooms/removeRoom",
    async (roomId, thunkAPI) => {
        try {
            const rooms = await roomService.delete(roomId);
            return rooms;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

const initialState = {
    entities: null,
    room: null,
    isLoading: false,
    dataLoaded: false,
    error: null
};

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loadingRooms.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadingRooms.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        });
        builder.addCase(loadingRooms.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getByIdRoom.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getByIdRoom.fulfilled, (state, action) => {
            state.room = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getByIdRoom.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(toReservRoom.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(toReservRoom.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(toReservRoom.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(createRoom.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createRoom.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(createRoom.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(getFilteredRooms.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getFilteredRooms.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getFilteredRooms.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(removeReserv.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(removeReserv.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(removeReserv.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateRoom.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateRoom.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(updateRoom.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(removeRoom.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(removeRoom.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(removeRoom.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

const { reducer: roomsReducer, name } = roomsSlice;

export const getRoomsFromState = () => (state) =>
    state[name].entities !== null ? state[name].entities : [];
export const isLoadingStatusRooms = () => (state) => state[name].isLoading;
export const getDataLoadedRooms = () => (state) =>
    state[name].entities !== null ? state[name].dataLoaded : false;
export const getInfOfRoom = () => (state) => state[name].room;
export const getByIdRooms = (hotelId) => (state) =>
    state[name].entities !== null
        ? state[name].entities.filter((item) => item.hotelId._id === hotelId)
        : [];

export default roomsReducer;
