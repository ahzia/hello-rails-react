import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import greetingReducer from './books/books';

export default function configureStore() {
    const store = createStore(greetingReducer, initialState, applyMiddleware(thunk));
    return store;
}