export interface RadioProps {
  name: string;
  isChecked?: boolean;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  onToggle?: () => void;
  value: string;
}
