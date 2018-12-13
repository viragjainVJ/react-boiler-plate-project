import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import userSaga from './userSaga';

const sagaMiddleware = createSagaMiddleware();

const configureSaga = () => {
  function* rootSaga() {
    yield all([authSaga(), userSaga()]);
  }

  sagaMiddleware.run(rootSaga);
};

export { sagaMiddleware, configureSaga };
