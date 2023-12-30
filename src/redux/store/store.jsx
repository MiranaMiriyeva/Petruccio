import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const globalState = createStore(rootReducer);

export default globalState;
