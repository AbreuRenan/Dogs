import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import ErrorComponent from "../Helpers/ErroComponent";
import LoadingAnimation from "../Helpers/LoadingAnimation";

import styles from "./FeedPhotos.module.css";
import { NavLink } from "react-router-dom";

function FeedPhotos({ user, page, setModalPhoto, setInfinite }) {
  const photoListRef = React.useRef();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const photosPerPage = 6;
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: page,
        total: photosPerPage,
        user: user,
      });
      const { response, json } = await request(url, options);
      if (response.ok && json.length < photosPerPage) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <ErrorComponent msg={error} />;
  if (loading) return <LoadingAnimation />;
  if (data?.length == 0 && window.location.pathname == "/conta") {
    return (
      <>
        <p className="noFotos">
          Você ainda não postou nenhuma foto!{" "}
          <NavLink to="/conta/postar" className={styles.navlink}>
            Começe agora.
          </NavLink>
        </p>
      </>
    );
  }

  if (data?.length > 0) {
    return (
      <>
        <ul className={`${styles.feed} animeLeft`} ref={photoListRef}>
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
      </>
    );
  } else
    return (
      <p>
        Você ainda não postou nenhuma foto!{" "}
        <NavLink to="/conta/postar">Começe agora.</NavLink>
      </p>
    );
}

export default FeedPhotos;
