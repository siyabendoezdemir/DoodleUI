import { MouseEventHandler } from "react";

export interface IconButtonProps {
  iconName: string;
  iconType?: "solid" | "regular";
  size?: "2xs" | "xs" | "sm" | "normal" | "lg" | "xl" | "2xl";
  iconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
