import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menuItem.module.css";

const menuItem = props => {
  return (
    <li className={styles.MenuItem}>
      <NavLink to={props.link} exact activeClassName={styles.Active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default menuItem;
