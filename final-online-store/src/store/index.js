import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { currentUserReducer } from "./currentUserReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: currentUserReducer
});

export const store = createStore(rootReducer, composeWithDevTools());