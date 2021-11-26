import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import S from "./App.module.css";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authSelectors from "./redux/auth/auth-selectors";

import HomePage from "./view/HomePage";
import LoginPage from "./view/LoginPage";
import RegisterPage from "./view/RegisterPage";
import ContactsPage from "./view/ContactsPage";



const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const isFetchingUser =  useSelector(authSelectors.isFetchingUser);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  
  return (
    <>
    {isFetchingUser && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            } />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
  
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
  
            {/* <Route path="*" element={< NotFoundView/>} /> */}
          </Route>
        </Routes>
      </>
    )}
    </>
  )
};

export default App;
