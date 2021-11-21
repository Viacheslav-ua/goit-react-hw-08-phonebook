import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations"

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
          state.user = action.peyload.user; 
          state.token = action.peyload.token;
          state.isLoggedIn = true;
        },
    },
    reducers: {},

});
export default authSlice.reducer