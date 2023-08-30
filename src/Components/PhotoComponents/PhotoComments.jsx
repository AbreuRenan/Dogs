import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

import styles from "./PhotoComments.module.css";

function PhotoComments(props) {
  const { logedIn } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  if (!logedIn) return null;
  return (
    <>
      <ul className={styles.comment}>
        {comments.map((c) => {
          return (
            <li key={c.comment_ID}>
              <b>{c.comment_author}: </b>
              <span>{c.comment_content}</span>
            </li>
          );
        })}
      </ul>
      <PhotoCommentsForm id={props.id} setComments={setComments} />
    </>
  );
}

export default PhotoComments;
