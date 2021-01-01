// external
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// internal
import { sagaMiddleware } from './middle-wares';

const rootReducer = combineReducers({});

const arrayMiddleWare: any = [sagaMiddleware, logger];

// mount it on the Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...arrayMiddleWare))
);

export default store;
