import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, name, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} type={type} name={name} />
    </div>
  );
}

export default Input;
