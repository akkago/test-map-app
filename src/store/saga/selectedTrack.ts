import { put, takeEvery } from 'redux-saga/effects';
import {
  selectedTrackAwaitAction,
  selectedTrackErrorAction,
  selectedTrackSuccessAction
} from '../actions/action-creators/selectedTrack.action-creator';
import { ISelectedTrackError } from '../actions/models/selectedTrack.model';
import { ITrack } from '../actions/models/tracks.model';

export const setSelectedTrack = (track?: ITrack) => {
  return { type: 'SET_SELECTED_TRACK', data: track }
};

export function* watchSetSelectedTrack() {
  yield takeEvery('SET_SELECTED_TRACK', setSelectedTrackAsync);
}

function* setSelectedTrackAsync(action?: any) {
  try {
    yield put(selectedTrackAwaitAction());
    yield put(selectedTrackSuccessAction(action.data));
  } catch (error) {
    yield put(selectedTrackErrorAction(error as ISelectedTrackError));
  }
}