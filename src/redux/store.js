import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./redusers/contactsSlice";
import { filterReducer } from "./redusers/filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});