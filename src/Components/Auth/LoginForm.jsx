import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import ErroComponent from "../Helpers/ErroComponent";

import styles from "./LoginForm.module.css";
import buttonStyle from "../Forms/Button.module.css";

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
    <section className={`loginForm animeLeft`}>
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>
            <span className="loading">Carregando</span>
          </Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <ErroComponent msg={error && "Dados incorretos"} />
      </form>
      <div className="animeLeft delay">
        <Link className={styles.perdeu} to="/login/perdeu">
          Esqueci a Senha
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta?</p>
          <Link className={buttonStyle.button} to="/login/criar">
            Cadastrar
          </Link>
        </div>
      </div>
    </section>
  );
}
export default LoginForm;
