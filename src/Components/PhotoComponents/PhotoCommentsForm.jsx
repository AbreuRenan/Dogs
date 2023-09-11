import React from "react";
import { ReactComponent as EnviarSVG } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import styles from "./PhotoCommentsForm.module.css";

function PhotoCommentsForm({ id, setComments, single }) {
  const [commentTextArea, setCommentTextArea] = React.useState("");
  const { request, error } = useFetch();
  const textAreaRef = React.useRef(null);
  const btnREF = React.useRef(null);

  React.useEffect(() => {
    const textAreaElement = textAreaRef.current;
    textAreaElement.addEventListener("keyup", handleEnterKey);
    return () => {
      textAreaElement.removeEventListener("keyup", handleEnterKey);
    };
  }, []);

  async function handleEnterKey(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      e.currentTarget.blur();
      btnREF.current.click();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(
      id,
      { comment: commentTextArea },
      token
    );

    const { response, json } = await request(url, options);
    if (response.ok) {
      setCommentTextArea("");
      btnREF.current.blur();
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form}  ${single ? styles.single : ""}`}
    >
      <textarea
        id="comment"
        ref={textAreaRef}
        name="comment"
        placeholder="Insira seu comentário"
        className={`${styles.textarea}`}
        value={commentTextArea}
        onChange={({ target }) => setCommentTextArea(target.value)}
      />
      <button className={styles.button} ref={btnREF}>
        <EnviarSVG />
      </button>
    </form>
  );
}

export default PhotoCommentsForm;
