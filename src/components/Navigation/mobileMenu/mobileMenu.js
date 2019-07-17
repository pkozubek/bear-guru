import React from "react";
import MenuItem from "../menuItem/menuItem";
import "./mobileMenu.css";

const mobileMenu = props => {
  return (
    <div className="MobileMenu">
      <ul>
        <MenuItem link="/">Beers</MenuItem>
        <MenuItem link="/favourite">Favourite</MenuItem>
      </ul>
    </div>
  );
};

export default mobileMenu;
