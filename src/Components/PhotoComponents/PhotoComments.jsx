import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

import styles from "./PhotoComments.module.css";

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { logedIn } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((c) => {
          return (
            <li key={c.comment_ID}>
              <b>{c.comment_author}: </b>
              <span>{c.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {logedIn && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;
