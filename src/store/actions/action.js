import * as actionTypes from "./actionTypes";
import axios from "../../axios-api/axios";

const setBeer = (gatheredBeers, nextPage) => {
  return {
    type: actionTypes.SET_BEERS,
    beers: gatheredBeers,
    page: nextPage
  };
};

export const addToFavourite = newBeer => {
  return {
    type: actionTypes.ADD_TO_FAVOURITE,
    beer: newBeer
  };
};

export const removeFromFavourite = idOfBeer => {
  return {
    type: actionTypes.REMOVE_FROM_FAVOURITE,
    id: idOfBeer
  };
};

export const initBeer = () => {
  return {
    type: actionTypes.INIT_BEERS
  };
};

export const loadBeer = page => {
  return dispatch => {
    const gatheredBeers = [];
    axios
      .get(`/beers?page=${page}&per_page=20`)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          gatheredBeers.push({
            id: response.data[i].id,
            name: response.data[i].name,
            tagline: response.data[i].tagline,
            image: response.data[i].image_url
          });
        }
        dispatch(setBeer(gatheredBeers, page + 1));
      })
      .catch(error => {
        alert(error);
      });
  };
};
