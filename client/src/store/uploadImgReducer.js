import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IMAGE_UPLOAD from "../service/imageUpload.service";

export const uploadImage = createAsyncThunk(
    "image/uploadImage",
    async (payload, thunkAPI) => {
        try {
            const { data } = await IMAGE_UPLOAD.post(payload);
            return data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue();
        }
    }
);

const resetUpload = createAction("upload/reset");

const initialState = {
    entities: null,
    room: null,
    isLoading: true,
    dataLoaded: false,
    error: null
};

const imageSlice = createSlice({
    name: "uploadImg",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(resetUpload, (state) => {
            state.entities = null;
        });
        builder.addCase(uploadImage.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(uploadImage.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        });
        builder.addCase(uploadImage.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    }
});

const { reducer: uploadImgReducer, name } = imageSlice;

export const getImage = () => (state) =>
    state[name].entities !== null ? state[name].entities : null;
export const resetUploadState = () => (dispatch) => dispatch(resetUpload());

export default uploadImgReducer;
