import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
})

export const token = {
    set: (token) => {
        instance.defaults.headers['Authorization'] = token
    },
    clear: () => {
        instance.defaults.headers['Authorization'] = ""
    },
}

export const regisrtrationThunk = createAsyncThunk(
    "auth/registration",
    async (userData, thunkAPI) => {
        try {
            const response = await instance.post("/users/signup", userData);
            token.set(response.data.token)
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
            token.set(response.data.token)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            const response = await instance.post("/users/logout")
            token.clear();
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const refreshUserThunk = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const userToken = state.user.token;

        try {           
            token.set(userToken)

            const response = await instance.get("/users/current")
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
    {
    condition: (_, { getState }) => {
        const state = getState();
        const userToken = state.user.token;

        if (!userToken) return false;
    }
    },
)