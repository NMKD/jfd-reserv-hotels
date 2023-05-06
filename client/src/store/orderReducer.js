import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "../service/order.service";

const initialState = {
    entities: null,
    isLoading: true,
    dataLoaded: false,
    error: null
};

export const loadOrders = createAsyncThunk(
    "orders/loadOrders",
    async (userId, thunkAPI) => {
        try {
            const orders = await orderService.get(userId);
            return orders;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

const orderSlice = createSlice({
    name: "orders",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loadOrders.pending, (state) => {
            state.isLoading = true;
            state.dataLoaded = false;
        });
        builder.addCase(loadOrders.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        });
        builder.addCase(loadOrders.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        });
    }
});

const { reducer: orderReducer, name } = orderSlice;

export const getOrders = () => (state) => state[name].entities;
export const isLoadingOrders = () => (state) => state[name].isLoading;
export const getStatusDataOrders = () => (state) => state[name].dataLoaded;

export default orderReducer;
