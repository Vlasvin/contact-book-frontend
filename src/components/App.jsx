import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import LoginPage from "pages/LoginPage /LoginPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import Layout from "./Layout/Layout";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { useAuth } from "hooks/useAuth";
import { currentUserThunk } from "../redux/Auth/thunks";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/contacts" element={<ContactsPage />}></Route>
            </Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>
        </Router>
      </Provider>
    </PersistGate>
  );
};

export default App;
