import { takeLatest, call, put } from 'redux-saga/effects';

function createFetchSaga(fetchActions, fetchApi) {
  function* fetchRequestedSaga({ payload }) {
    yield put(fetchActions.triggered(payload));
    try {
      const response = yield call(fetchApi, payload);
      yield put(fetchActions.succeeded(response));
    } catch (e) {
      yield put(fetchActions.failed(e));
    }
  }

  function* fetchSaga() {
    yield takeLatest(fetchActions.request, fetchRequestedSaga);
  }

  return fetchSaga;
}

export default createFetchSaga;
