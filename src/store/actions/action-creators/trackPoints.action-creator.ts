import { TRACK_POINTS_LIST_AWAIT, TRACK_POINTS_LIST_ERROR, TRACK_POINTS_LIST_SUCCESS } from "../action-types/trackPoints.type";
import { ITrackPointListError } from "../models/trackPoints.model";

export const trackPointsAwaitAction = () => ({
  type: TRACK_POINTS_LIST_AWAIT,
});
export const trackPointsSuccessAction = (payload: /*ITrack*/any[]) => ({
  type: TRACK_POINTS_LIST_SUCCESS,
  payload,
});
export const trackPointsErrorAction = (payload: ITrackPointListError) => ({
  type: TRACK_POINTS_LIST_ERROR,
  payload,
});