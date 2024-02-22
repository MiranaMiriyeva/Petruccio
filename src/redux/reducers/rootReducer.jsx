import { combineReducers } from "redux";
import { favoritesReducer, ordersReducer } from "./reducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  orders: ordersReducer,
});

export default rootReducer;
