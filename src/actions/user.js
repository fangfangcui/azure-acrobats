import {
    RETRIEVE_USER,
    DELETE_USER,
  } from "./types";
  
  import UserService from "../services/user.service";
  
  
  export const retrieveUser = (id) => async (dispatch) => {
    try {
      const res = await UserService.getUser(id);
  
      dispatch({
        type: RETRIEVE_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await UserService.deleteUser(id);
  
      dispatch({
        type: DELETE_USER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };