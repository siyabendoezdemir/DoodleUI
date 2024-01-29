import React, { FC, useEffect, useState } from "react";
import { IconButtonProps } from "./IconButton.types";
import styles from "./IconButton.module.scss";
import Icon from "../Icon/Icon";

const IconButton: FC<IconButtonProps> = ({
  iconName,
  iconType,
  size,
  iconColor,
  backgroundColor,
  borderColor,
  borderRadius,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${styles.iconButton} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        border: `2px solid ${borderColor}`,
        boxShadow: `-2px 3px 0 0 ${borderColor}`,
      }}
      disabled={disabled}
    >
      <Icon
        name={iconName}
        type={iconType}
        size={size}
        color={iconColor}
      ></Icon>
    </button>
  );
};

export default IconButton;
