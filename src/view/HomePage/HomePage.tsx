import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const HomePage = () => {
  const name = useSelector(authSelectors.getUsername);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if(isLoggedIn) {
    return <h1>This is {name}'s home page ...</h1>
  } else {
    return <h1>You must login or register</h1>
  }

};

export default HomePage;
