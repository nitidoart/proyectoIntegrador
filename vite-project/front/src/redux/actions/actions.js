import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./type";
import axios from "axios";

const URL = 'http://localhost:3001/rickandmorty/favorites/';

export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL, character);
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message)
    }
  };
};

export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL}${id}`);
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message)
    };
  };
};

//se hace dispatch de lo que que devuleva la ejecuaciñon de estas action creators para llevarlas a reducer y el sepa que hacer

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};