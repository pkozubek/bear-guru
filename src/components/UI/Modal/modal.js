import React, { Fragment } from "react";
import Shadow from "../shadow/shadow";
import styles from "./Modal.module.css";
import { withRouter } from "react-router-dom";

const modal = props => {
  return (
    <Fragment>
      <Shadow visible />
      <div className={styles.Modal}>{props.children}</div>
    </Fragment>
  );
};

export default withRouter(modal);
