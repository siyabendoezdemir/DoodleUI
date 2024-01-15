import React, { FC } from "react";
import { TextProps } from "./Text.types";
import styles from "./Text.module.scss";

const Text: FC<TextProps> = ({
  type,
  fontSize,
  text,
  fontWeight,
  textAlign,
  color,
  fontStyle,
  textDecoration,
  ...props
}) => {
  const style = {
    fontSize,
    fontWeight,
    textAlign,
    color,
    fontStyle,
    textDecoration,
  };

  return React.createElement(type, { style, ...props }, text);
};

export default Text;
