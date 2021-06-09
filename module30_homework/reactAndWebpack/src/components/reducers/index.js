import { combineReducers } from "redux";
import { addCarReducer } from "./addCarReducer";
import { carCardReducer } from "./carCardReducer";
import { carReducer } from "./carReducer";



export default combineReducers({
   car: carReducer,
   carCard: carCardReducer, 
   addCar: addCarReducer,
});