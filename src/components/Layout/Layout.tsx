import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu";
import s from "./Layout.module.css";

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header>
        {isLoggedIn ? (
          <>
            <NavLink to="/" className={s.link}>
              Home
            </NavLink>
            <NavLink to="/contacts" className={s.link}>
              Contacts
            </NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/register" className={s.link}>
              Registration
            </NavLink>
            <NavLink to="/login" className={s.link}>
              Login
            </NavLink>
          </>
        )}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>2021</footer>
    </>
  );
};

export default Layout;
