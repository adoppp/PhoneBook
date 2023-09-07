import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
})

export const regisrtrationThunk = createAsyncThunk(
    "auth/regisrtration",
    async (userData, thunkAPI) => {
        try {
            const response = await instance.post("/users/signup", userData);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try {
            const response = await instance.post("/users/login", userData);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)