import { ChangeEventHandler } from "react";

export interface InputProps {
  width?: number;
  height?: number;
  fontSize?: number;
  id?: string;
  primary?: boolean;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}