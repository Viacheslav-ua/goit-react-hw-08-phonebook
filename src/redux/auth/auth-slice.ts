import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import { AuthTypes } from "../../types";

const initialState: AuthTypes = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [authOperations.register.fulfilled](state, action: any) {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.isLoggedIn = true;
    },
    [authOperations.getCurrentUser.fulfilled](state, action: any) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action: any) {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
