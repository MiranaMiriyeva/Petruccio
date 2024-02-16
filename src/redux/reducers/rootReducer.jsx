import { combineReducers } from "redux";
import { favoritesReducer, ordersReducer, theOrdersReducer } from "./reducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  orders: ordersReducer,
  theOrders: theOrdersReducer,
});

export default rootReducer;
