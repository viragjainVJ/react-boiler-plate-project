import createFetchSaga from './createFetchSaga';
import { fetchUserActions, loginUser } from '../actions/userActions';
import { takeLatest, put } from 'redux-saga/effects';
import { userAuthenticationAPI } from '../../api/userApi';
import { push } from 'redux-first-routing';
import { url } from '../../router/router';
import appConfig from '../../appConfig';

function* userSaga() {
  function* loginUserSaga() {
    yield put(push(url(appConfig.userLogin)));
  }

  // Execute First
  const userDetails = createFetchSaga(fetchUserActions, userAuthenticationAPI);
  //After succesful call Execute Second
  yield takeLatest(loginUser, loginUserSaga);

  return yield* userDetails();
}

export default userSaga;
