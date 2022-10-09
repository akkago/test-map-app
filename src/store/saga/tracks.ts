import { put, takeEvery } from 'redux-saga/effects';
import tracks from '../../mock/mock';
import { tracksAwaitAction, tracksErrorAction, tracksSuccessAction } from '../actions/action-creators/tracks.action-creator';
import { ITrackListError } from '../actions/models/tracks.model';

export const fetchTracks = () => {
  return { type: 'FETCHED_TRACK' }
};

export function* watchFetchTracks() {
  yield takeEvery('FETCHED_TRACK', fetchTracksAsync);
}

function* fetchTracksAsync() {
  try {
    yield put(tracksAwaitAction());
    const data = tracks;
    // const data = yield call(() => {
    //   return fetch('https://dog.ceo/api/breeds/image/random')
    //           .then(res => res.json())
    //   }
    // );
    yield put(tracksSuccessAction(data));
  } catch (error) {
    yield put(tracksErrorAction(error as ITrackListError));
  }
}