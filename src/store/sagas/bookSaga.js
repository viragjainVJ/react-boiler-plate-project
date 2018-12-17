import { fetchBookActions } from '../actions/bookActions';
import { takeLatest, put } from 'redux-saga/effects';

function* bookSaga() {
  function* fetchRequestedSaga({ payload }) {
    yield put(fetchBookActions.triggered());
    try {
      yield put(fetchBookActions.succeeded(payload));
    } catch (e) {
      yield put(fetchBookActions.failed(e));
    }
  }

  function* fetchDeletionSaga({ payload }) {
    try {
      yield put(fetchBookActions.cancelled(payload));
    } catch (e) {
      yield put(fetchBookActions.failed());
    }
  }

  yield takeLatest(fetchBookActions.request, fetchRequestedSaga);
  yield takeLatest(fetchBookActions.cancel, fetchDeletionSaga);
}

export default bookSaga;
