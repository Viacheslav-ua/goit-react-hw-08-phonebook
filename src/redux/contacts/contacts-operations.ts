import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://connections-api.herokuapp.com";

const addContact: any = createAsyncThunk(
  "contacts/add",
  async (credentials) => {
    try {
      const { data } = await axios.post("/contacts", credentials);
      return data;
    } catch (error) {}
  }
);

const getContacts: any = createAsyncThunk(
  "contacts/get",
  async (token: string) => {
    try {
      const response = await fetch(baseURL + "​/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const removeContacts: any = createAsyncThunk("contacts/remove", async (id) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const contactsOperations = { addContact, getContacts, removeContacts };
export default contactsOperations;
