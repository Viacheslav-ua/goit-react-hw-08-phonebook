import React from "react";
import { Routes, Route } from 'react-router-dom';

import S from "./App.module.css";
import Layout from './components/Layout';

import HomePage from './view/HomePage'
import LoginPage from './view/LoginPage';
import RegisterPage from './view/RegisterPage';
import ContactsPage from './view/ContactsPage';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={< HomePage />} />
          <Route path="register" element={< RegisterPage />} />
          <Route path="login" element={< LoginPage />} />
          <Route path="contacts" element={< ContactsPage />} />
          {/* <Route path="*" element={< NotFoundView/>} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
