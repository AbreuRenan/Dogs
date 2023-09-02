import React from "react";
import styles from "./PhotoDelete.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../api";
import { useNavigate } from "react-router-dom";

function PhotoDelete({ photoID, token }) {
  const { request, error } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const { url, options } = PHOTO_DELETE(photoID, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      console.log(response);
      navigate("/conta");
    }
  }

  return (
    <div>
      <button className={styles.delete} onClick={handleClick}>
        Deletar
      </button>
    </div>
  );
}

export default PhotoDelete;
