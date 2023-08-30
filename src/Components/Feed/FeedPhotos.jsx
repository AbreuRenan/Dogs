import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import ErrorComponent from "../Helpers/ErroComponent";
import LoadingAnimation from "../Helpers/LoadingAnimation";

import styles from "./FeedPhotos.module.css";

function FeedPhotos({ setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0,
      });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <ErrorComponent msg={error} />;
  if (loading) return <LoadingAnimation />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((item) => {
          return (
            <FeedPhotoItem
              key={item.id}
              imgData={item}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
      </ul>
    );
  } else return null;
}

export default FeedPhotos;
