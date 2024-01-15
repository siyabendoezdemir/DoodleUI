import { MouseEventHandler } from "react";

export interface ButtonProps {
  width?: number;
  height?: number;
  fontSize?: number;
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}