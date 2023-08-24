import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, loading, error, logedIn } = React.useContext(UserContext);
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="usuario" type="text" name="username" {...username} />
        <Input label="usuario" type="password" name="password" {...password} />
        {error && error}
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      <Link to="/login/criar">Cadastrar</Link>
      <Link to="/login/perdeu">Esqueceu a Senha</Link>
      <Link to="/login/reset">Resetar a Senha</Link>
    </div>
  );
}
export default LoginForm;
