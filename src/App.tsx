import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import S from "./App.module.css";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./view/HomePage";
import LoginPage from "./view/LoginPage";
import RegisterPage from "./view/RegisterPage";
import ContactsPage from "./view/ContactsPage";
import PublicRoute from "./components/PublicRoute";

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
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
  );
};

export default App;
