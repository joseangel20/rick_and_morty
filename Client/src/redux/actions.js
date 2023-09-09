import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const LOGOUT = "LOGOUT";

// ACTION | addFav
export const addFav = async (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
    const { data } = await axios.post(endpoint, character);
    return (dispatch) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (response) {
    console.log(response.message);
  }
};

// ACTION | removeFav
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const logOutAction = () => {
  return {
    type: LOGOUT,
  };
};
