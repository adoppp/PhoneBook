import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshUserThunk, regisrtrationThunk } from "redux/operations/authThunk";


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
        .addCase(loginThunk.pending, PENDING)
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(loginThunk.rejected, REJECTED)
        .addCase(logoutThunk.pending, PENDING)
        .addCase(logoutThunk.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = false;
            state.userData = null;
            state.token = null;
        })
        .addCase(logoutThunk.rejected, REJECTED)
        .addCase(refreshUserThunk.pending, PENDING)
        .addCase(refreshUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = true;
            state.userData = action.payload;
        })
        .addCase(refreshUserThunk.rejected, REJECTED)
    }
})

export const authReducer = authSlice.reducer;