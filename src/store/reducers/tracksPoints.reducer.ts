import { combineReducers } from "redux";
import { makeDeepCopy } from "../../utils/utils";
import { TRACK_POINTS_LIST_AWAIT, TRACK_POINTS_LIST_ERROR, TRACK_POINTS_LIST_SUCCESS } from "../actions/action-types/trackPoints.type";
import { ITrackPointListState, TTrackPointListAction } from "../actions/models/trackPoints.model";

const initialTrackPointListState: ITrackPointListState = {
  responseData: null,
  error: null,
  await: false,
}

export const TrackPointsReducer = (
  state = initialTrackPointListState,
  action: TTrackPointListAction
): ITrackPointListState => {
  const { type, payload } = action;
  switch (type) {
    case TRACK_POINTS_LIST_AWAIT:
      return {
        ...makeDeepCopy(state),
        await: true,
      }
    case TRACK_POINTS_LIST_ERROR:
      return {
        ...makeDeepCopy(state),
        await: false,
        error: payload,
      }
    case TRACK_POINTS_LIST_SUCCESS:
      return {
        ...makeDeepCopy(state),
        await: false,
        responseData: payload,
      }
    default:
      return makeDeepCopy(state);
  }
}