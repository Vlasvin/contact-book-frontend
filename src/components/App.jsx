import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import LoginPage from "pages/LoginPage /LoginPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contacts" element={<ContactsPage />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
