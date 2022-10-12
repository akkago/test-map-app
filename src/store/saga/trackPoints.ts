import { put, takeEvery } from 'redux-saga/effects';
import tracks from '../../mock/mock';
import * as _ from 'lodash';
import { trackPointsAwaitAction, trackPointsErrorAction, trackPointsSuccessAction } from '../actions/action-creators/trackPoints.action-creator';
import { ITrackPointListError } from '../actions/models/trackPoints.model';

export const fetchTrackPoints = () => {
  return { type: 'FETCHED_TRACK_POINTS' }
};

export function* watchFetchTrackPoints() {
  yield takeEvery('FETCHED_TRACK_POINTS', fetchTrackPointsAsync);
}

function* fetchTrackPointsAsync() {
  try {
    yield put(trackPointsAwaitAction());
    const dataStarts = tracks.map((t) => t.start);
    const dataEnds = tracks.map((t) => t.end);
    let result: any[] = [];
    result.push(...dataStarts);
    result.push(...dataEnds);
    result = _.uniqWith(result, _.isEqual);
    yield put(trackPointsSuccessAction(result));
  } catch (error) {
    yield put(trackPointsErrorAction(error as ITrackPointListError));
  }
}
