import React from "react";
import styles from "./Button.module.css";

function Button({ children, ...props }) {
  return (
    <button
      className={`${styles.button} ${
        props.secondary ? styles.btnSecondary : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
