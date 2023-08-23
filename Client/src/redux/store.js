import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import favoriteReducer from "./reducer";

const store = createStore(favoriteReducer,composeWithDevTools());
export default store;
