import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./redusers/contactsSlice";
import { filterReducer } from "./redusers/filterSlice";
import { authReducer } from "./redusers/authSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    user: authReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});