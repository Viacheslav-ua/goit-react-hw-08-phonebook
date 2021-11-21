import { StateTypes } from "../../types"

const getIsLoggedIn = (state: StateTypes) => state.auth.isLoggedIn;
const getUsername = (state: StateTypes) => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
}
export default authSelectors;