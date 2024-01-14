import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}