import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        myFavorites: state.myFavorites.filter((myFavorite) => {
          if (myFavorite.id !== action.payload) {
            return myFavorite;
          }
        }),
      };
    default:
      return { ...state };
  }
};

export default favoriteReducer;
