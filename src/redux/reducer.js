/* eslint-disable array-callback-return */

import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const favoriteReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload]
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((myFavorite) => {
          if (myFavorite.id !== action.payload) {
            return myFavorite;
          }
        }),
        allCharacters: state.allCharacters.filter((allCharacter) => {
          if (allCharacter.id !== action.payload) {
            return allCharacter;
          }
        }),
      };
      
    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter((character) => {
          
          if(action.payload === "All") return character
          
          if (character.gender === action.payload) {
            return character;
          }
        }),
      };
    case ORDER:

      return {
        ...state,
        myFavorites: [...state.allCharacters].sort((a, b) => {
          if (action.payload === "A") return a.id - b.id;
          else return b.id - a.id;
        }),
      };
    default:
      return { ...state };
    }
};

export default favoriteReducer;
