import React from "react";
import useFetch from "../../Hooks/useFetch";
import ErroComponent from "../Helpers/ErroComponent";
import LoadingAnimation from "../Helpers/LoadingAnimation";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../api";
import PhotoContent from "../PhotoComponents/PhotoContent";

function FeedModal({ photoData }) {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function getSinglePhoto() {
      const { url, options } = PHOTO_GET(photoData?.id);
      const { response, json } = await request(url, options);
    }
    getSinglePhoto();
  }, [photoData, request]);

  if (error) return <ErroComponent msg={error} />;
  if (loading) return <LoadingAnimation />;
  if (data) {
    return <PhotoContent postData={data} />;
  } else {
    return null;
  }
}

export default FeedModal;
