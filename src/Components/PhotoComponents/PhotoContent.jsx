import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";

import styles from "./PhotoContent.module.css";

function PhotoContent({ postData }) {
  const { userData } = React.useContext(UserContext);
  const { comments, photo } = postData;
  const token = window.localStorage.getItem("token");

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {userData?.username === photo?.author ? (
              <PhotoDelete photoID={photo.id} token={token} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.atributos}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade > 1 ? "Anos" : "Ano"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}

export default PhotoContent;
