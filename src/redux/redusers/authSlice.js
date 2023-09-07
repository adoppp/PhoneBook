import { createSlice } from "@reduxjs/toolkit";
import { regisrtrationThunk } from "redux/operations/authThunk";


const initialState = {
    userData: null,
    isLoading: false,
    error: null,
    authenticated: false,
    token: null,
}

const PENDING = (state) => {
    state.isLoading = true;
    state.error = null;
  };
  
  const REJECTED = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(regisrtrationThunk.pending, PENDING)
        .addCase(regisrtrationThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(regisrtrationThunk.rejected, REJECTED)
    }
})

export const authReducer = authSlice.reducer;