/* eslint-disable array-callback-return */

import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, LOGOUT} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      let newState = state.allCharacters.filter((myFavorite) => {
        if (myFavorite.id !== action.payload) {
          return myFavorite;
        }
      });
      return {
        ...state,
        allCharacters: newState,
        myFavorites: newState,
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
      return{
        ...state,
        ...initialState
      }
    default:
      return { ...state };
  }
};

export default favoriteReducer;
