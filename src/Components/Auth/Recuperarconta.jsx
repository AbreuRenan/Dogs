import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { LOST_PASSWORD } from "../../api";
import ErroComponent from "../Helpers/ErroComponent";

function Recuperarconta() {
  const login = useForm();
  const { request, loading, error, data } = useFetch();
  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      // console.log(login);
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace("perdeu", "reset"),
      });
      const { response, json } = await request(url, options);
      console.log("response", response);
      console.log("json", json);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a Senha</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>Email enviado</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>
              <span className="loading">Enviando</span>
            </Button>
          ) : (
            <Button>Entrar</Button>
          )}
        </form>
      )}
      <ErroComponent msg={error} />
    </section>
  );
}

export default Recuperarconta;
