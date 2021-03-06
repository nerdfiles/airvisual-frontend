import { takeEvery, call, put } from 'redux-saga/effects';

import {
  DATA_LOADED,
  DATA_REQUESTED,
  API_ERRORED
} from '../constants/action-types';

import { environment } from '../env';

/**
 * watcherSaga
 *
 */
export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

/**
 * workerSaga
 *
 * @param action An object containing a payload.
 */
function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.payload.url);
    yield put({
      type: DATA_LOADED,
      payload
    });
  } catch(e) {
    yield put({
      type: API_ERRORED,
      payload: e
    });
  }
}

/**
 * getData
 *
 * @param url A URL.
 */
function getData(url):Promise<any[]> {
  return fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
      'x-rapidapi-key': environment.XRapidApiKey
    }
  })
    .then(res => res.json());
}
