import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from "../_reducers/index";
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from '../_sagas/sagas';


const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware(); //saga

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
        sagaMiddleware, //saga
        vanillaPromise,
        loggerMiddleware
    )
);

//saga
sagaMiddleware.run(helloSaga)
const action = type => store.dispatch({type})