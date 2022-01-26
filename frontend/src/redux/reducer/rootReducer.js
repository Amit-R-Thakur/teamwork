import { combineReducers } from "redux";
import {USER} from "./userReducer";
import { todoReducer } from "./todoReducer";

export const reducer = combineReducers({
  USER,
  TODO:todoReducer,
});
