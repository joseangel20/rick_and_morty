/* eslint-disable array-callback-return */

import {
  ADD_FAV,
  FILTER,
  ORDER,
  REMOVE_FAV,
  LOGOUT,
  GETFAVORITES,
  LOGIN,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  token: "",
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case GETFAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case FILTER:
      let filterMyFavorites = state.allCharacters.filter((character) => {
        if (action.payload === "All") return character;

        if (character.gender === action.payload) {
          return character;
        }
      });
      return {
        ...state,
        myFavorites: filterMyFavorites,
      };
    case ORDER:
      let orderFavorites = state.myFavorites.sort((a, b) => {
        if (action.payload === "Ascendente") return a.id - b.id;
        else return b.id - a.id;
      });
      return {
        ...state,
        myFavorites: orderFavorites,
      };

    case LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return { ...state };
  }
};

export default favoriteReducer;
