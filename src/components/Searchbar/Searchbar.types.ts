export interface SearchbarProps {
  width: number;
  height: number;
  searchButtonSize?: "2xs" | "xs" | "sm" | "normal" | "lg" | "xl" | "2xl";
  placeholderText?: string;
  onSearch?: (searchTerm: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  searchButtonLabel?: string;
  clearButton?: boolean;
  disabled?: boolean;
  autoCompleteOptions?: string[];
  onAutoCompleteSelect?: (option: string) => void;
}
