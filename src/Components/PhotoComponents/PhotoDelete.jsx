import React from "react";
import styles from "./PhotoDelete.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../api";
import { useNavigate } from "react-router-dom";

function PhotoDelete({ photoID, token }) {
  const { request, loading, setLoading } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(photoID, token);
      const { response, json } = await request(url, options);
      if (response.ok) {
        console.log(response);
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button className={`${styles.delete} loading`} disabled>
          Deletando
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
}

export default PhotoDelete;
