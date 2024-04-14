import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Notiflix from "notiflix";

import { currentUserThunk, logoutThunk } from "../../redux/Auth/thunks";
import { removeToken } from "Services/api";

import {
  Div,
  TitleContainer,
  Title,
  User,
  UserMail,
  Header,
  BtnLogout,
  MainText,
  RegLink,
  StyledLink,
} from "./styled";
import logo from "images/logo.svg";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.token);
  const email = useSelector((state) =>
    state.auth.user ? state.auth.user.email : null
  );

  const handleLogoutConfirmation = () => {
    Notiflix.Confirm.show(
      "Confirmation",
      "Are you sure you want to log out?",
      "Yes",
      "Cancel",
      function () {
        dispatch(logoutThunk());
        removeToken();
        navigate("/login");
      },
      function () {
        Notiflix.Notify.info("You canceled log out.");
      }
    );
  };

  const handleLogin = () => {
    dispatch(logoutThunk());
    removeToken();
    navigate("/login");
  };

  useEffect(() => {
    if (!isAuth) dispatch(currentUserThunk());
  }, [dispatch, isAuth]);

  return (
    <Div>
      <Header>
        <TitleContainer>
          <img src={logo} alt="Logo" width="60" height="60" />
          <Title>
            <StyledLink to="/">Phonebook</StyledLink>
          </Title>
        </TitleContainer>
        {isAuth ? (
          <User>
            <UserMail>{email}</UserMail>
            <nav>
              <BtnLogout type="button" onClick={handleLogoutConfirmation}>
                Log Out
              </BtnLogout>
            </nav>
          </User>
        ) : (
          <User>
            <nav>
              <BtnLogout type="button" onClick={handleLogin}>
                Log In
              </BtnLogout>
            </nav>
          </User>
        )}
      </Header>
      {!isAuth && (
        <Suspense fallback={<div>Loading page...</div>}>
          {
            <MainText>
              Create your own digital address book right now!{" "}
              <RegLink to="/register">Registration</RegLink> is the first step
              to organized management of your contacts. Start now!
            </MainText>
          }
          <Outlet />
        </Suspense>
      )}
      {isAuth && (
        <Suspense fallback={<div>Loading page...</div>}>
          {children}
          <Outlet />
        </Suspense>
      )}
    </Div>
  );
};
export default Layout;
