import React from "react";
import { connect } from "react-redux";
import BeerContainer from "../../components/beerContainer/beerContainer";

const favourite = props => {
  return (
    <div style={{ marginTop: "100px" }}>
      <BeerContainer beers={props.favouriteBeers} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favouriteBeers: state.favourite
  };
};

export default connect(mapStateToProps)(favourite);
