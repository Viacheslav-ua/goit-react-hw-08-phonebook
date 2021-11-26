import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";

interface PropsTypes {
  children: ReactElement;
}
const PrivateRoute: React.FC<PropsTypes> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(location, isLoggedIn);
  if (!isLoggedIn) {
    console.log("redir");
    return <Navigate to="/login" state={{ from: location }} />;
    // return <Navigate to="/login" />;
  }

  return children;
};
export default PrivateRoute;
