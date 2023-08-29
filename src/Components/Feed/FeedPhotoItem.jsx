import React from "react";

import styles from "./FeedPhotoItem.module.css";

function FeedPhotoItem({ imgData }) {
  const { id, src, idade, peso, title, date, acessos, author, total_comments } =
    imgData;
  return (
    <li className={styles.photo}>
      <img src={src} alt={title} />
      <span className={styles.acessos}>{acessos}</span>
    </li>
  );
}

export default FeedPhotoItem;
