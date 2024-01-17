import React, { FC, useEffect, useState } from "react";
import { RadioProps } from "./Radio.types";
import styles from "./Radio.module.scss";

const Radio: FC<RadioProps> = ({
  isChecked: isCheckedProp,
  primary,
  size = "medium",
  label,
  onToggle,
  ...props
}) => {
  const radioClassname = `
  ${styles.radio} 
  ${primary ? styles.primary : styles.secondary} 
  ${styles[size]}`;

  const [isChecked, setIsChecked] = useState(isCheckedProp);

  useEffect(() => {
    setIsChecked(isCheckedProp);
  }, [isCheckedProp]);

  const handleToggle = () => {
    setIsChecked(!isChecked);

    if (onToggle) {
      onToggle();
    }
  };

  return (
    <label className={radioClassname}>
      {label}
      <input
        type="radio"
        className={styles.radioInput}
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Radio;
