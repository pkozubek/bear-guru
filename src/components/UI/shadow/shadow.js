import React from "react";
import styles from "./shadow.module.css";
import { withRouter } from "react-router-dom";

const shadow = props => {
  const redirectPath = props.location.pathname.substring(
    0,
    props.location.pathname.indexOf("/details")
  );

  return props.visible ? (
    <div
      onClick={() => {
        props.history.replace(redirectPath);
      }}
      className={styles.Shadow}
    >
      {props.children}
    </div>
  ) : null;
};

export default withRouter(shadow);
