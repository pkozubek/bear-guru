import React, { Component, Fragment } from "react";
import Modal from "../../components/UI/Modal/modal";
import axios from "../../axios-api/axios";
import SuggestedBeer from "../../components/suggestedBeer/suggestedBeer";
import styles from "./BeerDetails.module.css";
import Image from "../../components/UI/Image/Image";
import Button from "../../components/UI/button/button";
import * as actions from "../../store/actions/action";
import { connect } from "react-redux";

class BeerDetails extends Component {
  state = {
    selectedBeer: null,
    suggestedBeers: []
  };

  loadSuggestedBeer = id => {
    axios
      .get(`/beers/${id}`)
      .then(response => {
        const gatheredBeerData = response.data[0];
        const gatheredBeer = {
          id: gatheredBeerData.id,
          image: gatheredBeerData.image_url,
          name: gatheredBeerData.name,
          tagline: gatheredBeerData.tagline,
          description: gatheredBeerData.description,
          ibu: gatheredBeerData.ibu,
          abv: gatheredBeerData.abv,
          ebc: gatheredBeerData.ebc,
          brewers_tips: gatheredBeerData.brewers_tips
        };
        this.setState({ selectedBeer: gatheredBeer });
        const gatheredSuggestedBeers = [];

        axios
          .get(
            `/beers?ibu_gt=${gatheredBeer.ibu + -1}&ibu_lt=${gatheredBeer.ibu +
              1}&page=1&per_page=3`
          )
          .then(response => {
            response.data.forEach(element => {
              gatheredSuggestedBeers.push({
                id: element.id,
                name: element.name,
                image: element.image_url
              });
            });
            this.setState({ suggestedBeers: gatheredSuggestedBeers });
          })
          .catch(error => alert(error));
      })
      .catch(error => alert(error));
  };

  isAlreadyLiked = id => {
    let notExist = false;

    this.props.favouriteBeers.forEach(element => {
      if (element.id === id) notExist = true;
    });

    return notExist;
  };

  addToFavourite = () => {
    const newFavouriteBeer = {
      id: this.state.selectedBeer.id,
      name: this.state.selectedBeer.name,
      image: this.state.selectedBeer.image,
      tagline: this.state.selectedBeer.tagline
    };

    if (!this.isAlreadyLiked(this.state.selectedBeer.id))
      this.props.addToFavourite(newFavouriteBeer);
  };

  componentDidMount() {
    this.loadSuggestedBeer(this.props.match.params.id);
  }

  render() {
    let beerDetails =
      this.state.selectedBeer !== null ? (
        <Fragment>
          <div className={styles.SelectedBeerImage}>
            <Image
              src={this.state.selectedBeer.image}
              alt={this.state.selectedBeer.name}
            />
          </div>
          <div className={styles.SelectedBeerData}>
            <h2>
              {this.state.selectedBeer.name}
              <Button
                class={
                  this.isAlreadyLiked(this.state.selectedBeer.id)
                    ? "unlike"
                    : "like"
                }
                click={() => {
                  this.isAlreadyLiked(this.state.selectedBeer.id)
                    ? this.props.removeFromFavourite(this.state.selectedBeer.id)
                    : this.addToFavourite();
                }}
              />
            </h2>
            <p>{this.state.selectedBeer.tagline}</p>
            <p>
              <b>IBU</b>
              {this.state.selectedBeer.ibu}
              <b>ABV</b>
              {this.state.selectedBeer.abv}%<b>EBC</b>
              {this.state.selectedBeer.abv}
            </p>
            <p>{this.state.selectedBeer.description}</p>
            <p>{this.state.selectedBeer.brewers_tips}</p>

            <div className={styles.MoreBeers}>
              <p style={{ width: "100%" }}>
                <b>You might also like</b>
              </p>
              {this.state.suggestedBeers.map(mappedBeer => {
                return (
                  <SuggestedBeer
                    key={mappedBeer.id}
                    id={mappedBeer.id}
                    name={mappedBeer.name}
                    image={mappedBeer.image}
                    changeBeer={this.loadSuggestedBeer}
                  />
                );
              })}
            </div>
          </div>
        </Fragment>
      ) : null;

    return <Modal>{beerDetails}</Modal>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToFavourite: newBeer => dispatch(actions.addToFavourite(newBeer)),
    removeFromFavourite: id => dispatch(actions.removeFromFavourite(id))
  };
};

const mapStateToProps = state => {
  return {
    favouriteBeers: state.favourite
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerDetails);
