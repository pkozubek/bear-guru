import React from "react";
import styles from "./spinner.module.css";

const spinner = props => {
  const retSpinner = props.isVisible ? (
    <div className={styles.ldshourglass} />
  ) : null;
  return retSpinner;
};

export default spinner;
