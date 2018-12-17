import { delay } from 'redux-saga';
import { takeLatest, takeEvery, call, put, select, fork, cancel } from 'redux-saga/effects';
import { fetchAuthTokenActions, validateAuth, logoutUser, scheduleValidateAuth, cancelValidateAuth } from '../actions/authActions';
import { push } from 'redux-first-routing';
import { authTokenToCookie, authTokenFromCookie, deleteAuthTokenFromCookie } from '../../api/authApi';
import { authSelector, authenticatedSelector } from '../selectors/authSelectors';
import { url } from '../../router/router';
import appConfig from '../../appConfig';

function* authTokenReceivedSaga({ payload: auth }) {
  const redirectToHome = auth.redirectToHome === undefined || auth.redirectToHome;
  yield call(authTokenToCookie, auth.authToken);
  if (redirectToHome) {
    const {
      router: { queries }
    } = yield select();
    const location = queries && queries.r ? appConfig.invokeAuthCallbackURL + '?r=' + queries.r : appConfig.invokeAuthCallbackURL;

    window.location = location;

    yield put(push(url(appConfig.userHomePage)));
  }
}

function* logoutUserSaga() {
  yield call(deleteAuthTokenFromCookie);

  const {
    router: { queries }
  } = yield select();
  let loginUrl = url(appConfig.loginPage, queries);
  loginUrl = queries && queries.r ? loginUrl + '?r=' + queries.r : loginUrl;

  yield put(push(loginUrl));
}

function* validateAuthSaga({ payload }) {
  const redirectToHome = (payload && payload.redirectToHome) || false;
  const { authToken } = yield call(authTokenFromCookie);

  const state = yield select();
  const auth = authSelector(state);
  const authenticated = authenticatedSelector(state);

  if (authToken != null) {
    // Auth Cookie is present
    if (!authenticated) {
      //user not logged in on app; log user in.
      yield put(fetchAuthTokenActions.succeeded({ authToken, redirectToHome }));
    } else if (auth.authToken !== authToken) {
      // some other user on app or inconsistent state; log user out
      yield put(logoutUser());
    } else {
      // Nothing to do, its same user
    }
  } else {
    // Auth cookie not present
    // Cookie should be present immediately after login
    // if user is authenticated => cookie expired or deleted -> trigger logout user
    // if user is not authenticated -> trigger logout user to force a redirect to
    // login page by default
    // TODO - Commented since authroization is not successful.
    //yield put(logoutUser());
  }
}

function* scheduleValidateAuthSaga() {
  yield delay(appConfig.validateAuthTimeout);
  yield put(validateAuth());
  yield put(scheduleValidateAuth());
}

function* cancelWorkerSaga(task) {
  yield cancel(task);
}

function* authSaga() {
  yield takeLatest(fetchAuthTokenActions.succeeded, authTokenReceivedSaga);
  yield takeLatest(logoutUser, logoutUserSaga);

  yield takeEvery(validateAuth, validateAuthSaga);

  const workerTask = yield fork(takeEvery, scheduleValidateAuth, scheduleValidateAuthSaga);
  yield fork(takeLatest, cancelValidateAuth, cancelWorkerSaga, workerTask);
}

export default authSaga;
