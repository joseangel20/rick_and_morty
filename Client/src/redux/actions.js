/* eslint-disable no-unreachable */
import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const LOGOUT = "LOGOUT";
export const GETFAVORITES = "GETFAVORITES";
export const LOGIN = "LOGIN";

export const loginRedux = (token) => {
  return {
    type: LOGIN,
    payload: token,
  };
};

export const getFavorites = (data) => {
  return {
    type: GETFAVORITES,
    payload: data,
  };
};

// ACTION | addFav
export const addFav = async (body, token) => {
  const endpoint = "/fav";
  const authToken = token;

  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, body, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// ACTION | removeFav
export const removeFav = (id) => {
  const endpoint = "/fav/" + id;
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
