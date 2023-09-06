import { createSlice } from "@reduxjs/toolkit";

const FILTER_INITIAL_STATE = {
    filter: "",
};

const filterSlice = createSlice({
    name: "filter",

    initialState: FILTER_INITIAL_STATE,

    reducers: {
        makeFilter(state, action) {
            state.filter = action.payload
        },
    }
});

export const { makeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;