import { SELECTED_TRACK_AWAIT, SELECTED_TRACK_ERROR, SELECTED_TRACK_SUCCESS } from "../action-types/selectedTrack.type";
import { ISelectedTrackError } from "../models/selectedTrack.model";
import { ITrack } from "../models/tracks.model";

export const selectedTrackAwaitAction = () => ({
  type: SELECTED_TRACK_AWAIT,
});
export const selectedTrackSuccessAction = (payload?: ITrack) => ({
  type: SELECTED_TRACK_SUCCESS,
  payload,
});
export const selectedTrackErrorAction = (payload: ISelectedTrackError) => ({
  type: SELECTED_TRACK_ERROR,
  payload,
});