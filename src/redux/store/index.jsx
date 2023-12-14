import {combineReducers, createStore} from "redux"
import { favoritesReducer } from "../reducers/favorites.reducer";
const reducers = combineReducers({
    favorites: favoritesReducer
})
export const globalState = createStore(reducers)