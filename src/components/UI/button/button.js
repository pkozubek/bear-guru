import React from "react";
import "./button.css";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const button = props => {
  let button = null;

  switch (props.class) {
    case "like":
      button = (
        <button className={props.class} onClick={props.click}>
          <IoIosHeartEmpty />
        </button>
      );
      break;
    case "unlike":
      button = (
        <button className={props.class} onClick={props.click}>
          <IoIosHeart />
        </button>
      );
      break;
    default:
      break;
  }

  return button;
};

export default button;
