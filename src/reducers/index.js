import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import user from "./user";
import household from "./household";

export default combineReducers({
  auth,
  message,
  user,
  household
});