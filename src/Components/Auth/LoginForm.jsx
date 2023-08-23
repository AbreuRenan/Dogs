import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const APIURL = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const [token, setToken] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    async function asyncFecth(url) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const json = await response.json();
      setToken(json.token);
      return { response, json };
    }
    if (username.validate() && password.validate()) {
      asyncFecth(APIURL);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="usuario" type="text" name="username" {...username} />
        <Input label="usuario" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
      <Link to="/login/perdeu">Esqueceu a Senha</Link>
      <Link to="/login/reset">Resetar a Senha</Link>
    </div>
  );
}

export default LoginForm;
