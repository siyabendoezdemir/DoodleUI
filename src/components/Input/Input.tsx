import React, { FC, Fragment } from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

const Input: FC<InputProps> = ({
  width = 400,
  height = 50,
  fontSize,
  id,
  primary,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  const inputStyles = {
    width: `${width}px`,
    height: `${height}px`,
    fontSize: `${fontSize}px`,
  };

  return (
    <Fragment>
      <div className={styles.label}>
        <p
          className={`
          ${primary ? styles.primary : styles.secondary}
          ${styles.text} 
          ${disabled ? styles.disabled : ""} 
          ${error ? styles.error : ""}`}
        >
          {label}
        </p>
      </div>
      <input
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        className={`
        ${styles.input} 
        ${disabled ? styles.disabled : ""} 
        ${error ? styles.error : ""} 
        ${success ? styles.success : ""} 
        ${primary ? styles.primary : styles.secondary}`}
        placeholder={placeholder}
        style={inputStyles}
        {...props}
      />
      <div className={styles.message}>
        <p className={`${styles.text} ${error ? styles.error : ""}`}>
          {message}
        </p>
      </div>
    </Fragment>
  );
};

export default Input;
