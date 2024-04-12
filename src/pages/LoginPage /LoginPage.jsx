import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginThunk } from "../../redux/Auth/thunks";
import FormLogin from "components/FormLogin/FormLogin";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const login = (body) => {
    dispatch(loginThunk(body));
  };

  useEffect(() => {
    isAuth && navigate("/contacts");
  }, [isAuth, navigate]);

  return <FormLogin login={login} />;
};

export default LoginPage;
