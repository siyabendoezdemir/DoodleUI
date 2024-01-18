import React, { FC, useEffect, useState } from "react";
import { LoadingbarProps } from "./Loadingbar.types";
import styles from "./Loadingbar.module.scss";

const Loadingbar: FC<LoadingbarProps> = ({
  progress,
  max = 100,
  min = 0,
  primary,
  bordered,
  height = 10,
  width = 100,
  ...props
}) => {
  const boundedProgress = Math.min(Math.max(progress, min), max);

  const progressBarWidth = ((boundedProgress - min) / (max - min)) * 100;

  const innerBarStyles = {
    width: `${progressBarWidth}%`,
    height: `${height}px`,
  };

  const containerStyles = {
    width: `${width}%`,
  };

  return (
    <div
      className={`${styles.loadingbarContainer} ${
        primary ? styles.primary : styles.secondary
      } ${bordered ? styles.bordered : null}`}
      style={containerStyles}
    >
      <div className={styles.loadingbarInner} style={innerBarStyles}></div>
    </div>
  );
};

export default Loadingbar;
