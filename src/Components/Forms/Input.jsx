import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, name, value, onChange, onBlur, error }) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.inputError}>{error}</p>}
    </div>
  );
}

export default Input;
