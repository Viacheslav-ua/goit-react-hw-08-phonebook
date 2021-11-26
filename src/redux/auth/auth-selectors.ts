import { StateTypes } from "../../types";

const getIsLoggedIn = (state: StateTypes) => state.auth.isLoggedIn;
const getUsername = (state: StateTypes) => state.auth.user.name;
const getEmail = (state: StateTypes) => state.auth.user.email;
const getToken = (state: StateTypes) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getEmail,
  getToken,
};
export default authSelectors;
