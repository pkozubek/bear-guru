import * as actionTypes from "../actions/actionTypes";

const initState = {
  beers: [],
  page: 1,
  isInitialized: false,
  favourite: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_BEERS:
      return {
        ...state,
        beers: [...state.beers, ...action.beers],
        page: state.page + 1
      };
    case actionTypes.ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.beer]
      };
    case actionTypes.REMOVE_FROM_FAVOURITE:
      const newFavourite = state.favourite.filter(singleFavourite => {
        return singleFavourite.id !== action.id;
      });

      return {
        ...state,
        favourite: newFavourite
      };
    case actionTypes.INIT_BEERS:
      return {
        ...state,
        isInitialized: true
      };
    default:
      return state;
  }
};

export default reducer;
