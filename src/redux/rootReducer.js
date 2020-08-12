import {combineReducers} from "redux";
import {desktopReducer} from "./disktopReducer";

export const rootReducer = combineReducers({
  desktop: desktopReducer
})