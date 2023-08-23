import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const localToken = window.localStorage.getItem("token");
    if (localToken) getUser(localToken);
  }, []);

  async function getUser(userToken) {
    const { url, options } = USER_GET(userToken);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      setToken(json.token);
      window.localStorage.setItem("token", token);
      getUser(token);
    }
  }
  return (
    <div className="container">
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
