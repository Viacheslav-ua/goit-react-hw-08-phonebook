import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from './RegisterPage.module.css'

const RegisterPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleAddInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "name") setName(e.currentTarget.value);
    if (e.currentTarget.name === "email") setEmail(e.currentTarget.value);
    if (e.currentTarget.name === "password") setPassword(e.currentTarget.value);
      
    };

  return (
    <form className={s.formRegister}>
      <h2>Register Page</h2>
      <TextField
        label="User name"
        variant="standard"
        id="component-simple"
        type="text"
        name="name"
        className={s.input}
        value={name}
       onChange={handleAddInput}
      />

      <TextField
        label="Email"
        variant="standard"
        id="component-simple"
        type="text"
        name="email"
        className={s.input}
        value={email}
       onChange={handleAddInput}
      />

      <TextField
        label="Password"
        variant="standard"
        id="component-simple"
        type="text"
        name="password"
        className={s.input}
        value={password}
       onChange={handleAddInput}
      />

      <Button type="submit" className={s.btn} variant="contained">
        register
      </Button>
    </form>

  )
}

export default RegisterPage;