import React, { FC, useEffect, useState } from "react";
import { RadioGroupProps } from "./RadioGroup.types";
import styles from "./RadioGroup.module.scss";
import Radio from "../Radio/Radio";

const RadioGroup: FC<RadioGroupProps> = ({
  groupName,
  options,
  size = "medium",
  spacing,
  defaultValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleToggle = (selectedValue: string) => {
    setValue(selectedValue);
    onChange(selectedValue);
  };

  const radioGroupStyle = {
    gap: `${spacing}px`,
  };

  return (
    <div className={styles.radioGroup} style={radioGroupStyle}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={groupName}
          size={size}
          isChecked={value === option.value}
          onToggle={() => handleToggle(option.value)}
          {...option}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
