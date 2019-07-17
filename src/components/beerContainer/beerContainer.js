import React from "react";
import SingleBeer from "../singleBeer/singleBeer";
import * as styles from "./beerContainer.module.css";

const beerContainer = props => {
  return (
    <div className={styles.BeerContainer}>
      {props.beers.map(mappedBeer => (
        <SingleBeer
          key={mappedBeer.id}
          id={mappedBeer.id}
          name={mappedBeer.name}
          image={mappedBeer.image}
          tagline={mappedBeer.tagline}
        />
      ))}
    </div>
  );
};

export default beerContainer;
