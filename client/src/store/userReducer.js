/* eslint-disable indent */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AUTH_SERVICE from "../service/auth.service";
import localStorageService from "../service/localStorageService";
import userService from "../service/user.service";

export const signUp = createAsyncThunk(
    "auth/signUp",
    async (payload, thunkAPI) => {
        try {
            const response = await AUTH_SERVICE.signUp(payload);
            localStorageService.setToken(response);
            return await userService.getCurrentUser();
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const signIn = createAsyncThunk(
    "auth/signIn",
    async ({ password, email }, thunkAPI) => {
        try {
            const response = await AUTH_SERVICE.signIn({ email, password });
            localStorageService.setToken(response);
            return await userService.getCurrentUser();
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const loadCurrentUser = createAsyncThunk(
    "user/loadCurrentUser",
    async (thunkAPI) => {
        try {
            return await userService.getCurrentUser();
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (payload, thunkAPI) => {
        try {
            const user = await userService.update(payload);
            return user;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
    await AUTH_SERVICE.signOut();
});

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: true,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const authSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(signIn.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(signIn.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(signOut.fulfilled, (state) => {
            state.entities = null;
            state.isLoading = false;
            state.error = null;
            state.auth = null;
            state.isLoggedIn = false;
        });
        builder.addCase(loadCurrentUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadCurrentUser.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(loadCurrentUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    }
});

const { reducer: authReducer, name } = authSlice;

export const getAuth = () => (state) =>
    state[name].entities !== null ? state[name].entities._id : null;
export const getIsLoggedIn = () => (state) => state[name].isLoggedIn;
export const getCurrentUser = () => (state) => state[name].entities;
export const getStatusLoadingUser = () => (state) => state[name].isLoading;
export const isAdmin = () => (state) => state[name].entities.isAdmin;

export default authReducer;
