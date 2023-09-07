import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import favoriteReducer from "./reducer";
import thank from "redux-thunk";

const store = createStore(favoriteReducer,composeWithDevTools(applyMiddleware(thank)));
export default store;
