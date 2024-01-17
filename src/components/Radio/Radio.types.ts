export interface RadioProps {
  isChecked?: boolean;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  onToggle?: () => void;
}
