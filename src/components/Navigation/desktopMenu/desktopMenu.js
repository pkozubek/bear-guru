import React from "react";
import MenuItem from "../menuItem/menuItem";
import Logo from "../../UI/logo/logo";
import styles from "./desktopMenu.module.css";

const desktopMenu = props => {
  return (
    <header className={styles.DesktopMenu}>
      <Logo />
      <ul>
        <MenuItem link="/">Beers</MenuItem>
        <MenuItem link="/favourite">Favourite</MenuItem>
      </ul>
    </header>
  );
};

export default desktopMenu;
