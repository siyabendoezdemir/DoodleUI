import React from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  let buttonClass = `
    ${styles.button} 
    ${styles[size]} 
    ${primary ? styles.primary : styles.secondary} 
    ${disabled ? styles.disabled : ""}`;

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
