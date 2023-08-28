import React, { useContext } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import ErroComponent from "../Helpers/ErroComponent";

function Criarconta() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const { error, setError, loading, setLoading } =
    React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) throw new Error(`Erro: ${json.message}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button onClick={handleSubmit}>Entrar</Button>
        )}
        {error && <ErroComponent msg={error} />}
      </form>
    </section>
  );
}

export default Criarconta;
