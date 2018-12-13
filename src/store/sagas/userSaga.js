import createFetchSaga from './createFetchSaga';
import { fetchUserActions, loginUser } from '../actions/userActions';
import { takeLatest, put } from 'redux-saga/effects';
import { userAuthentication } from '../../api/userApi';
import { push } from 'redux-first-routing';
import { url } from '../../router/router';
import appConfig from '../../appConfig';

function* userSaga() {
  function* loginUserSaga() {
    yield put(push(url(appConfig.userLogin)));
  }

  const userDetails = createFetchSaga(fetchUserActions, userAuthentication);

  yield takeLatest(loginUser, loginUserSaga);

  return yield* userDetails();
}

export default userSaga;
