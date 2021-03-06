import React from "react";
import S from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

import Fab from '@mui/material/Fab';


const UserMenu: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);
  return (
    <>
      <span className={S.spn}>Hi, {email}</span>
      
      <Fab className={S.fab} size="small" variant="extended" onClick={() => dispatch(authOperations.logOut())}>
        log out
      </Fab>
    </>
  );
};

export default UserMenu;
