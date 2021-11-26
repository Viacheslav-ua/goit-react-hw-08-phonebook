import React from "react";
import Button from "@mui/material/Button";
import S from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

const UserMenu: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);
  return (
    <>
      <span className={S.spn}>Hi, {email}</span>
      <Button
        className={S.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        log out
      </Button>
    </>
  );
};

export default UserMenu;
