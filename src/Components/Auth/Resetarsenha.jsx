import React, { useReducer } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import ErroComponent from "../Helpers/ErroComponent";
import { useNavigate } from "react-router-dom";

function Resetarsenha() {
  const [login, setLogin] = React.useState(null);
  const [key, setKey] = React.useState(null);
  const { request, loading, error, data } = useFetch();
  const password = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        key,
        login,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }
  return (
    <section>
      <h1 className="title">Resetar senha</h1>
      <p>{login}</p>
      <p>{key}</p>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>
            <span className="loading">Carregando</span>
          </Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      <ErroComponent msg={error} />
    </section>
  );
}

export default Resetarsenha;
