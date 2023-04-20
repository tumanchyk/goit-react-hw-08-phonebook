import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/concactSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer, 
  }
});




