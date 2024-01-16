// reducers.js
import { combineReducers } from "redux";
import  userReducer  from "./userReducer";
import productReducer from "./productReducer"; // 'productReducer' olarak import et

const rootReducer = combineReducers({
 user: userReducer,
 product: productReducer,
});

export default rootReducer;
