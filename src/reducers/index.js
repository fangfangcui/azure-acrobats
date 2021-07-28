import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import user from "./user";
import household from "./household";
import transaction from "./transaction";

export default combineReducers({
  auth,
  message,
  user,
  household, 
  transaction
});