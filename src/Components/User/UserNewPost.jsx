import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

import styles from "./UserNewPost.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { USER_NEW_POST } from "../../api";
import ErroComponent from "../Helpers/ErroComponent";
import { useNavigate } from "react-router-dom";

function UserNewPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [imgState, setImgState] = React.useState({});
  const navigate = useNavigate();

  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    formData.append("img", imgState.raw);

    const token = window.localStorage.getItem("token");
    const { url, options } = USER_NEW_POST(formData, token);
    const { response, json } = await request(url, options);
  }

  function handleImg({ target }) {
    setImgState({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  return (
    <section className={`${styles.newPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" name="nome" type="text" {...nome} />
        <Input label="Peso" name="peso" type="number" {...peso} />
        <Input label="Idade" name="idade" type="number" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImg} />

        {loading ? (
          <Button disabled>
            <span className="loading">Enviando</span>
          </Button>
        ) : (
          <Button onClick={handleSubmit}>Enviar</Button>
        )}
        {error && <ErroComponent msg={error} />}
      </form>
      {imgState.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${imgState.preview}')` }}
        ></div>
      )}
    </section>
  );
}

export default UserNewPost;
UserNewPost;
