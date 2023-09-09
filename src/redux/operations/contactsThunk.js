import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./authThunk";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
      try {
        const response = await instance.get('/contacts')
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async({name, number}, thunkAPI) => {
      try {
        const response = await instance.post('/contacts', {name, number})
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async(id, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${id}`, id)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)