import React from "react";
import styles from "./singleBeer.module.css";
import { withRouter } from "react-router-dom";
import Image from "../UI/Image/Image";

const singleBeer = props => {
  return (
    <div
      className={styles.SingleBeer}
      onClick={() => {
        props.history.replace(
          `${props.match.url !== "/" ? props.match.url : ""}/details/${
            props.id
          }`
        );
      }}
    >
      <Image src={props.image} alt={props.name} />
      {/*<img src={props.image} alt={props.name} />*/}
      <p className={styles.title}>{props.name}</p>
      <p className={styles.description}>{props.tagline}</p>
    </div>
  );
};

export default withRouter(singleBeer);
