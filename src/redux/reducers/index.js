import { combineReducers } from "redux";
import changeTheNumber from "./IncDec";
import multiplyDivideTheNumber from "./MulDiv";

//npm i redux react-redux
const rootReducer = combineReducers({
  changeTheNumber,
  multiplyDivideTheNumber,
});

export default rootReducer;
