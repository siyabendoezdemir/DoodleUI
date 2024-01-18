import { RadioProps } from "../Radio/Radio.types";

export interface RadioGroupProps {
  groupName: string;
  options: Omit<RadioProps, "name" | "isChecked" | "onToggle">[];
  defaultValue?: string;
  size?: 'small' | 'medium' | 'large';
  spacing?: number;
  onChange: (value: string) => void;
}
