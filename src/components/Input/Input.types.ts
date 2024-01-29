import { ChangeEventHandler } from "react";

export interface InputProps {
  width?: number;
  height?: number;
  value?: string;
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
  focused?: boolean;
}