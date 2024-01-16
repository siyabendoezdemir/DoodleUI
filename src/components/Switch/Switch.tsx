import React, { FC, useEffect, useState } from "react";
import { SwitchProps } from "./Switch.types";
import styles from "./Switch.module.scss";

const Switch: FC<SwitchProps> = ({
  isChecked: isCheckedProp,
  primary,
  size = "medium",
  onToggle,
  ...props
}) => {
  const switchClassName = `
  ${styles.switch} 
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
    <div className={switchClassName} onClick={handleToggle}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className={styles.switchInput}
      />
      <span className={styles.slider}></span>
    </div>
  );
};

export default Switch;
