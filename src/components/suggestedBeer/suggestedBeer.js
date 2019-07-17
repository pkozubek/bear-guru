import React from "react";
import Image from "../UI/Image/Image";
import styles from "./suggestedBeer.module.css";
import { withRouter } from "react-router-dom";

const suggestedBeer = props => {
  return (
    <div
      className={styles.SuggestedBeer}
      onClick={() => {
        props.changeBeer(props.id);
      }}
    >
      <Image src={props.image} />
      <label>{props.name}</label>
    </div>
  );
};

export default withRouter(suggestedBeer);
