import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateTypes } from "../../types";
import { connect } from "http2";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // axios.defaults.headers.common.ContentType = "application/json";
    // axios.defaults.headers.common["Content-Type"] = "application/json";
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register: any = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn: any = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut: any = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const getCurrentUser: any = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // return state;
      return thunkAPI.rejectWithValue(null);
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {}
  }
);

const authOperations = { register, logIn, logOut, getCurrentUser };
export default authOperations;
