import { combineReducers } from "redux";
import { carCardReducer } from "./carCardReducer";
import { carReducer } from "./carReducer";



export default combineReducers({
   car: carReducer,
   carCard: carCardReducer, 
});