import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { Div, StyledNavLink } from "./Layout.styled";

const Layout = () => {
  const isAuth = useSelector((state) => state.auth.token);
  return (
    <Div>
      <h1>Phonebook</h1>
      {!isAuth && (
        <nav>
          <StyledNavLink type="button" to="/login">
            Login
          </StyledNavLink>
        </nav>
      )}

      {isAuth && (
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      )}
    </Div>
  );
};
export default Layout;
