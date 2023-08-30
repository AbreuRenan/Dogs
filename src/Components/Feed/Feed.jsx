import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && <FeedModal photoData={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
