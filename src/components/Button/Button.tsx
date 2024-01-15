import React from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  width = 400,
  height = 200,
  fontSize,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  let buttonClass = `
    ${styles.button} 
    ${primary ? styles.primary : styles.secondary} 
    ${disabled ? styles.disabled : ""}`;

  const buttonStyle = {
    width: `${width}px`,
    height: `${height}px`,
    fontSize: `${fontSize}px`,
  };

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
