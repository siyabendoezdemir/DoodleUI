import React, { FC, useEffect, useState } from "react";
import { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";

import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

const Icon: FC<IconProps> = ({
  name,
  type,
  size,
  backgroundColor,
  bordered,
  borderRadius,
  ...props
}) => {
  let iconName: IconName = name.toLowerCase() as IconName;
  const iconType = type === "solid" ? "fas" : "far";

  return <FontAwesomeIcon icon={[iconType, iconName]} {...props} />;
};

export default Icon;
