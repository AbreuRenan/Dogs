import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import Criarconta from "./Criarconta";
import Recuperarconta from "./Recuperarconta";
import Resetarsenha from "./Resetarsenha";
import { UserContext } from "../../UserContext";

import styles from "./Login.module.css";

function Login() {
  const { logedIn, loading } = useContext(UserContext);
  if (logedIn === true) return <Navigate to="/conta" />;
  return (
    <>
      <section className={styles.login}>
        <div className={`${styles.forms} animeLeft`}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="criar" element={<Criarconta />} />
            <Route path="perdeu" element={<Recuperarconta />} />
            <Route path="reset" element={<Resetarsenha />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default Login;
