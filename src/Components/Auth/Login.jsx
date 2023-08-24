import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import Criarconta from "./Criarconta";
import Recuperarconta from "./Recuperarconta";
import Resetarsenha from "./Resetarsenha";
import { UserContext } from "../../UserContext";

function Login() {
  const { logedIn, loading } = useContext(UserContext);
  if (logedIn === true) return <Navigate to="/conta" />;
  return (
    <>
      {loading ? (
        "Carregando..."
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="criar" element={<Criarconta />} />
            <Route path="perdeu" element={<Recuperarconta />} />
            <Route path="reset" element={<Resetarsenha />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default Login;
