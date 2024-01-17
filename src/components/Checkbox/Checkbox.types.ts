export interface CheckboxProps {
  isChecked?: boolean;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onToggle?: () => void;
}
