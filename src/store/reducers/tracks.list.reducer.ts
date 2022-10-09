import { combineReducers } from "redux";
import { makeDeepCopy } from "../../utils/utils";
import { TRACKS_LIST_AWAIT, TRACKS_LIST_ERROR, TRACKS_LIST_SUCCESS } from "../actions/action-types/tracks.type";
import { ITrackListState, TTracksListAction } from "../actions/models/tracks.model";

const initialTrackListState: ITrackListState = {
  responseData: null,
  error: null,
  await: false,
}

export const TracksReducer = (
  state = initialTrackListState,
  action: TTracksListAction
): ITrackListState => {
  const { type, payload, } = action;
  switch (type) {
    case TRACKS_LIST_AWAIT:
      return {
        ...makeDeepCopy(state),
        await: true,
      }
    case TRACKS_LIST_ERROR:
      return {
        ...makeDeepCopy(state),
        await: false,
        error: payload,
      }
    case TRACKS_LIST_SUCCESS:
      return {
        ...makeDeepCopy(state),
        await: false,
        responseData: payload,
      }
    default:
      return makeDeepCopy(state);
  }
}