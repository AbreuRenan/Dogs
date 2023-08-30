import React from "react";

import styles from "./FeedPhotoItem.module.css";

function FeedPhotoItem({ imgData, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(imgData);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={imgData.src} alt={imgData.title} />
      <span className={styles.acessos}>{imgData.acessos}</span>
    </li>
  );
}

export default FeedPhotoItem;
