import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";
import { ContactsTypes } from "../../types";

const initialState: ContactsTypes = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    [contactsOperations.addContact.fulfilled](state, action: any) {
      state.items.push(action.payload);
    },
    [contactsOperations.getContacts.fulfilled](state, action: any) {
      return {
        ...state,
        items: action.payload,
      };
    },
    [contactsOperations.removeContacts.fulfilled](state, action: any) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.meta.arg),
      };
    },
  },
});
export default contactsSlice.reducer;
