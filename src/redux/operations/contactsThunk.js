import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64ee06fc1f8721827142332e.mockapi.io/'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('contacts')
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
        const response = await axios.post('contacts', {name, number})
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
      const response = await axios.delete(`contacts/${id}`, id)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)