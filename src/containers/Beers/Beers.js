import React, { Component } from "react";
//import axios from "../../axios-api/axios";
import BeerContainer from "../../components/beerContainer/beerContainer";
import { Waypoint } from "react-waypoint";
import { connect } from "react-redux";
import * as actions from "../../store/actions/action";

class Beers extends Component {
  state = {
    beers: [],
    page: 1,
    mounted: false
  };

  componentDidMount() {
    if (!this.props.beersInitialized) {
      this.props.loadBeer(this.props.page);
      //this.props.initBeer();
    }
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <BeerContainer beers={this.props.beers} />
        <Waypoint
          onEnter={() => {
            if (this.props.beersInitialized) {
              this.props.loadBeer(this.props.page);
            } else {
              this.props.initBeer();
            }
          }}
        >
          <div style={{ height: "100px" }} />
        </Waypoint>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    page: state.page,
    beersInitialized: state.isInitialized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadBeer: page => dispatch(actions.loadBeer(page)),
    initBeer: () => dispatch(actions.initBeer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beers);
