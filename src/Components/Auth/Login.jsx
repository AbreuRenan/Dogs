import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import Criarconta from "./Criarconta";
import Recuperarconta from "./Recuperarconta";
import Resetarsenha from "./Resetarsenha";

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<Criarconta />} />
        <Route path="perdeu" element={<Recuperarconta />} />
        <Route path="reset" element={<Resetarsenha />} />
      </Routes>
    </div>
  );
}

export default Login;
