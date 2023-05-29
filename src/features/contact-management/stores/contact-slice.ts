import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactStatus } from "../types";

interface ContactState {
  id: number;
  firstName: string;
  lastName: string;
  status: ContactStatus;
}

const initialState: ContactState[] = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    createContact: (state, action: PayloadAction<ContactState>) => {
      state.push(action.payload);
    },
    editContact: (state, action: PayloadAction<ContactState>) => {
      return state.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const { createContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
