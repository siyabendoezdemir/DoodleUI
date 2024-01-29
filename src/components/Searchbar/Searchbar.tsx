import React, { FC, useState, useEffect } from "react";
import { SearchbarProps } from "./Searchbar.types";
import styles from "./Searchbar.module.scss";
import Input from "../Input/Input";
import IconButton from "../IconButton/IconButton";

const Searchbar: FC<SearchbarProps> = ({
  width,
  height,
  searchButtonSize,
  placeholderText,
  onSearch,
  onChange,
  value,
  defaultValue,
  searchButtonLabel = "Search",
  clearButton,
  disabled,
  autoCompleteOptions,
  onAutoCompleteSelect,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue || "");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    if (autoCompleteOptions) {
      setFilteredOptions(autoCompleteOptions);
    }
  }, [autoCompleteOptions]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange?.(event);

    if (autoCompleteOptions) {
      const filtered = autoCompleteOptions.filter((option) =>
        option.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const handleSearch = () => {
    onSearch?.(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    if (autoCompleteOptions) {
      setFilteredOptions(autoCompleteOptions);
    }
  };

  const renderAutoCompleteOptions = () => {
    return (
      <div className={`${styles.autoCompleteOptions}`}>
        {filteredOptions.map((option: string, index: number) => (
          <div
            key={index}
            onClick={() => {
              setInputValue(option);
              onAutoCompleteSelect?.(option);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    );
  };

  const searchbarStyles = {
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
  };

  return (
    <div
      className={styles.searchbarContainer}
      style={searchbarStyles}
      {...props}
    >
      <div className={styles.inputWithClearContainer}>
        <Input
          width={width}
          height={height}
          onChange={handleInputChange}
          value={value ?? inputValue}
          disabled={disabled}
          placeholder={placeholderText}
        />
        {clearButton && inputValue && (
          <div className={styles.iconButtonContainer}>
            <IconButton
              backgroundColor="#fff"
              borderColor="#000"
              borderRadius={5}
              iconColor="#000"
              iconName="close"
              iconType="solid"
              onClick={() => {
                handleClear();
              }}
              size="normal"
              disabled={disabled}
            />
          </div>
        )}
      </div>
      <IconButton
        backgroundColor="#fff"
        borderColor="#000"
        borderRadius={8}
        iconColor="#000"
        iconName="search"
        size={searchButtonSize}
        iconType="solid"
        onClick={() => {
          handleSearch();
        }}
        disabled={disabled}
      />
      {autoCompleteOptions && renderAutoCompleteOptions()}
    </div>
  );
};

export default Searchbar;
