import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink to="/" className={styles.logo} aria-label="Dogs - Go to home">
          <Dogs />
        </NavLink>
        <NavLink to="/login" className={styles.login}>
          Login | Criar Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
