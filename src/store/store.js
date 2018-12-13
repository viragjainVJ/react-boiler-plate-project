import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, routerReducer } from '../router/router';
import { sagaMiddleware } from './sagas/saga';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';

import appConfig from '../appConfig';
import { identity } from 'lodash';

const configureStore = (initialState = {}) => {
  const rootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    user: userReducer
  });

  // Create the store
  const compose = appConfig.enableReduxDevTools ? composeWithDevTools : identity;

  return createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware, routerMiddleware)));
};

export { configureStore };
