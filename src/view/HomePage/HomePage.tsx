import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const HomePage = () => {
  const name = useSelector(authSelectors.getUsername);
  return <h1>This is {name}'s home page</h1>;
};

export default HomePage;
