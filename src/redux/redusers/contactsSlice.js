import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from '../operations/contactsThunk'

const CONTACTS_INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const PENDING = (state) => {
  state.isLoading = true;
  state.error = null;
};

const REJECTED = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",

    initialState: CONTACTS_INITIAL_STATE,

    extraReducers: (builder) => {
      builder
      .addCase(fetchContacts.pending, PENDING)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, REJECTED)
      .addCase(addContact.pending, PENDING)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //state.items = [...state.items, action.payload];
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, REJECTED)
      .addCase(deleteContact.pending, PENDING)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const contactIndex = state.items.findIndex(contact => contact.id === action.payload);
        state.items.splice(contactIndex, 1);
      })
      .addCase(deleteContact.rejected, REJECTED)
    },
})

export const contactsReducer = contactsSlice.reducer;