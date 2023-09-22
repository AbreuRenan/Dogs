import React from "react";

function ErroComponent({ msg }) {
  if (msg == false) return null;
  return (
    <p
      style={{
        color: "#f31",
        margin: "1rem 0 0 0",
      }}
    >
      {msg}
    </p>
  );
}

export default ErroComponent;
