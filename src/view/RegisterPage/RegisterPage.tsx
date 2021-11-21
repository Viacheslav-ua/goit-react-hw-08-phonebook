import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from './RegisterPage.module.css'
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authOperations.register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  }

  const handelChang = ({target: {name, value }}: React.ChangeEvent<HTMLInputElement>) => {
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

  return (
    <form onSubmit={handelSubmit} className={s.formRegister}>
      <h2>Register Page</h2>
      <TextField
        label="User name"
        variant="standard"
        id="component-simple"
        type="text"
        name="name"
        className={s.input}
        value={name}
       onChange={handelChang}
      />

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
        register
      </Button>
    </form>

  )
}

export default RegisterPage;