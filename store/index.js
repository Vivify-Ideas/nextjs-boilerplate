import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
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

export const makeStore = ({ isServer }) => {
  // create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // If it's on server side, create a store
  if (isServer) {
    const store = createStore(
      combineReducers,
      bindMiddleware([sagaMiddleware])
    );

    // run your sagas on server
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
  }

  // If it's on client side, create a store which will persist
  const persistConfig = {
    key: 'nextjs',
    whitelist: ['user'], // only user will be persisted - list reducer names here
    storage
  };
  const persistedReducer = persistReducer(persistConfig, combineReducers);

  // add an extra parameter for applying middleware:
  const store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]));

  // run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // This creates a persistor object
  // eslint-disable-next-line no-underscore-dangle
  store.__persistor = persistStore(store);

  // return the store:
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: config.IS_DEV });
