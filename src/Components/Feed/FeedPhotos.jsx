import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import ErrorComponent from "../Helpers/ErroComponent";
import LoadingAnimation from "../Helpers/LoadingAnimation";

import styles from "./FeedPhotos.module.css";

function FeedPhotos({ user, page, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const photosPerPage = 3;
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: page,
        total: photosPerPage,
        user: user,
      });
      const { response, json } = await request(url, options);
      console.log("request", json);
      if (response.ok && json.length < photosPerPage) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

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
