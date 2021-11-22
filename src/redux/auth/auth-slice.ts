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
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state: any, action: any) {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.isLoggedIn = true;
    },
  },
});
export default authSlice.reducer;
