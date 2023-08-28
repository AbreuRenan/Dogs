import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

function Header() {
  const { userData, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink to="/" className={styles.logo} aria-label="Dogs - Go to home">
          <Dogs />
        </NavLink>
        {userData ? (
          <div>
            <NavLink to="/conta" className={styles.login}>
              Olá {userData.nome}
            </NavLink>
          </div>
        ) : (
          <NavLink to="/login" className={styles.login}>
            Login | Criar Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
