import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact-slice";

export const contactStore = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof contactStore.getState>;
export type AppDispatch = typeof contactStore.dispatch;
