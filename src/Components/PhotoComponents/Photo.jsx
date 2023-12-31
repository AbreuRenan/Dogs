import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import FeedPhotoItem from "../Feed/FeedPhotoItem";
import ErroComponent from "../Helpers/ErroComponent";
import LoadingAnimation from "../Helpers/LoadingAnimation";
import PhotoContent from "./PhotoContent";
import Head from "../Helpers/Head";

function Photo() {
  const [photoData, setPhotoData] = React.useState(null);
  const { id } = useParams();
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET(id);
      const { response, json } = await request(url, options);
      setPhotoData(json);
    }
    fetchPhoto();
  }, [id, request]);
  if (error) return <ErroComponent msg={error} />;
  if (loading) return <LoadingAnimation />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={photoData.photo.title} />
        <PhotoContent postData={photoData} single={true} />
      </section>
    );
}

export default Photo;
