import React, { FC, useEffect, useState } from "react";
import { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.scss";

const Checkbox: FC<CheckboxProps> = ({
  isChecked: isCheckedProp,
  primary,
  size = "medium",
  onToggle,
  ...props
}) => {
  const checkboxClassname = `
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
    <div className={styles.checkboxWrapper}>
      <span className={`${styles.checkbox} ${checkboxClassname}`}>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <svg>
          <use xlinkHref={"#checkbox"} className={styles.checkbox}></use>
        </svg>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" display="none">
        <symbol id="checkbox" viewBox="0 0 22 22">
          <path
            fill="none"
            d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
          />
        </symbol>
      </svg>
    </div>
  );
};

export default Checkbox;
