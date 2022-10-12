import { TRACKS_LIST_AWAIT, TRACKS_LIST_ERROR, TRACKS_LIST_SUCCESS } from "../action-types/tracks.type";
import { ITrack, ITrackListError } from "../models/tracks.model";

export const tracksAwaitAction = () => ({
  type: TRACKS_LIST_AWAIT,
});

export const tracksSuccessAction = (payload: ITrack[]) => ({
  type: TRACKS_LIST_SUCCESS,
  payload,
});

export const tracksErrorAction = (payload: ITrackListError) => ({
  type: TRACKS_LIST_ERROR,
  payload,
});