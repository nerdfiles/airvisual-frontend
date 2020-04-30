import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import apiSaga from '../sagas/api-saga';

const initializeSagaMiddleware = createSagaMiddleware();

const storeEnhancers = compose;

const store = createStore(rootReducer,
  storeEnhancers(
    applyMiddleware(initializeSagaMiddleware)
  )
);

initializeSagaMiddleware.run(apiSaga);

export default store;
