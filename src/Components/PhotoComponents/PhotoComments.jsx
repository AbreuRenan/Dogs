import React from "react";

function PhotoComments({ id, comments }) {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_ID}>
            <p>{comment.comment_content}</p>
            <p>{comment.comment_author}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default PhotoComments;
