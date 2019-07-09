import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from "../_reducers/index";

const loggerMiddleware = createLogger();


const vanillaPromise = store => next => action => {
    if (typeof action.then !== 'function') {
      return next(action)
    }
    
    return Promise.resolve(action).then(store.dispatch)
}

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        vanillaPromise,
        loggerMiddleware
    )
);
