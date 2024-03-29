import React, { FC, useEffect, useState } from "react";
import { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";

import { IconName, library, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fas, fab);

const Icon: FC<IconProps> = ({
  name,
  type,
  size,
  color,
  backgroundColor,
  bordered,
  borderRadius,
  ...props
}) => {
  let iconName: IconName = name.toLowerCase() as IconName;
  const iconType =
    type === "solid" ? "fas" : type === "regular" ? "far" : "fab";

  return (
    <FontAwesomeIcon
      className={`${styles.icon} ${bordered ? styles.bordered : ""}`}
      icon={[iconType, iconName]}
      size={size as SizeProp}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
      }}
      {...props}
    />
  );
};

export default Icon;
