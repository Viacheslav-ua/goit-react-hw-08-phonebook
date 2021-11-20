import { Link, NavLink, Outlet } from "react-router-dom"
import { isFunctionExpression } from "typescript"
import s from "./Layout.module.css"

const setActive = ({isActive}: any) => isActive ? s.activeLink : '';
const Layout = () => {

  return (
    <>
      <header>
        <NavLink to="/" className={s.link}>Home</NavLink>
        <NavLink to="/register" className={s.link}>Registration</NavLink>
        <NavLink to="/login" className={s.link}>Login</NavLink>
        <NavLink to="/contacts" className={s.link}>Contacts</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>2021</footer>
    </>
  )
}

export default Layout;