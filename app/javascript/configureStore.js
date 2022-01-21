import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import greetingReducer from './greeting';
import logger from "redux-logger";

export default function configureStore() {
    const store = createStore(greetingReducer, applyMiddleware(thunk, logger));
    return store;
}