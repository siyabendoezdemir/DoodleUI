export interface SwitchProps {
  isChecked?: boolean;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onToggle?: () => void;
}
