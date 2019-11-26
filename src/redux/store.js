import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import booksReducer from '../redux/reducers/books';
import cartReducer from '../redux/reducers/cart';
import filterReducer from '../redux/reducers/filter';

let reducers = combineReducers({
  books:booksReducer,
  cart:cartReducer,
  filter:filterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)
));

window._store_ = store;
export default store




