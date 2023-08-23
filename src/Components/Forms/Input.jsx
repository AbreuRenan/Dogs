import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, name, placeholder, erroMsg }) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} type={type} name={name} />
      <p className={styles.inputError}>{erroMsg}</p>
    </div>
  );
}

export default Input;
