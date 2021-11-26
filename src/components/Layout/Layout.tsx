import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu";
import s from "./Layout.module.css";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
      <header className={s.header}>
        {isLoggedIn ? (
          <>
          <div className={s.navMenu}>
            <NavLink to="/" className={s.link}>
              Home
            </NavLink>
            <NavLink to="/contacts" className={s.link}>
              Contacts
            </NavLink>
           </div>
           <div className={s.userMenu}> 
            <UserMenu />
            </div>
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
      </Toolbar>
      </AppBar>
      </Box>
      <main className="container">
        <Outlet />
      </main>
      
    </>
  );
};

export default Layout;
