import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";

interface PropsTypes {
  children: ReactElement;
}
const PublicRoute: React.FC<PropsTypes> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" state={{ from: location }} />;
    // return <Navigate to="/login" />;
  }

  return children;
};
export default PublicRoute;
