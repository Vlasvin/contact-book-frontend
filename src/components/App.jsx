import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import LoginPage from "pages/LoginPage /LoginPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { currentUserThunk } from "../redux/Auth/thunks";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        ></Route>
      </Route>
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      ></Route>
      <Route
        path="/register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<RegistrationPage />}
          />
        }
      ></Route>
    </Routes>
  );
};

export default App;
