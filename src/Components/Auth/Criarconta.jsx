import React, { useContext } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";

function Criarconta() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const { error, setError } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (response.ok === false) {
        throw new Error(`${json.message}`);
      }
      console.log(json);
    } catch (err) {
      setError(err);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
      {error && console.log(error)}
    </section>
  );
}

export default Criarconta;
