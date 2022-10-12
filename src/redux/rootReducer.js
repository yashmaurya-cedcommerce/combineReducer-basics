import { combineReducers } from "redux";
import cakeReducer from "./cake/reducers";
import chocolateReducer from "./chocolate/reducers";
import iceCreamReducer from "./iceCreams/reducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    chocolate: chocolateReducer,
    icecream: iceCreamReducer
})

export default rootReducer