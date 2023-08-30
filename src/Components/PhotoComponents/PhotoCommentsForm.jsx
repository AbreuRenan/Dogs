import React from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";

function PhotoCommentsForm({ id, setComments }) {
  const [commentTextArea, setCommentTextArea] = React.useState("");
  const { request, error } = useFetch();

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
      setComments((prev) => [...prev, json]);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Insira seu comentário"
        value={commentTextArea}
        onChange={({ target }) => setCommentTextArea(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
}

export default PhotoCommentsForm;
