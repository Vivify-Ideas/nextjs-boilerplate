import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

import combineReducers from './reducers';
import rootSaga from './sagas';
import config from '../config';

const bindMiddleware = (middleware) => {
  if (config.IS_DEV) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  // create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // add an extra parameter for applying middleware:
  const store = createStore(combineReducers, bindMiddleware([sagaMiddleware]));

  // run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // return the store:
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: config.IS_DEV });
