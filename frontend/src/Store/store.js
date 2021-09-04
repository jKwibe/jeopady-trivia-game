import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "../reducers";

const initialState = {};

const middleware = [thunk];

const composerEnhancers = ((process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose)

const store = createStore(
    rootReducers,
    initialState,
    composerEnhancers(applyMiddleware(...middleware))
);

export default store;