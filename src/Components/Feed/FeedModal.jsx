import React from "react";
import useFetch from "../../Hooks/useFetch";
import ErroComponent from "../Helpers/ErroComponent";
import LoadingAnimation from "../Helpers/LoadingAnimation";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../api";
import PhotoContent from "../PhotoComponents/PhotoContent";

function FeedModal({ photoData, setModalPhoto }) {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function getSinglePhoto() {
      const { url, options } = PHOTO_GET(photoData?.id);
      const { response, json } = await request(url, options);
    }
    getSinglePhoto();
  }, [photoData, request]);

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) setModalPhoto(null);
  }
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <ErroComponent msg={error} />}
      {loading && <LoadingAnimation />}
      {data && <PhotoContent postData={data} />}
    </div>
  );
}

export default FeedModal;
