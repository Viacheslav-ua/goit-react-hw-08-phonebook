import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from './LoginPage.module.css'
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password }));
    setEmail('');
    setPassword('');
  }

  const handelChang = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

  return (
    <form onSubmit={handelSubmit} className={s.formLogin}>
      <h2>Login</h2>
      <TextField
        label="Email"
        variant="standard"
        id="component-simple"
        type="text"
        name="email"
        className={s.input}
        value={email}
       onChange={handelChang}
      />

      <TextField
        label="Password"
        variant="standard"
        id="component-simple"
        type="text"
        name="password"
        className={s.input}
        value={password}
       onChange={handelChang}
      />

      <Button type="submit" className={s.btn} variant="contained">
        login
      </Button>
    </form>
  )
}

export default LoginPage;