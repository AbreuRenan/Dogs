import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <nav className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login | Criar Login</NavLink>
      </nav>
    </div>
  );
}

export default Header;
