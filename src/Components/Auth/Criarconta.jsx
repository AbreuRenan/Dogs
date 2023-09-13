import React, { useContext } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import ErroComponent from "../Helpers/ErroComponent";
import useFetch from "../../Hooks/useFetch";
import Head from "../Helpers/Head";

function Criarconta() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const { setError, setLoading, userLogin } = React.useContext(UserContext);

  const { loading, error, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Criar Conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button onClick={handleSubmit}>Entrar</Button>
        )}
        {error && <ErroComponent msg={error} />}
      </form>
    </section>
  );
}

export default Criarconta;
