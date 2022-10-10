import { makeDeepCopy } from "../../utils/utils";
import { SELECTED_TRACK_AWAIT, SELECTED_TRACK_ERROR, SELECTED_TRACK_SUCCESS } from "../actions/action-types/selectedTrack.type";
import { ISelectedTrackActionAction, ITrackState } from "../actions/models/selectedTrack.model";

const initialTrackListState: ITrackState = {
  responseData: null,
  error: null,
  await: false,
}

export const SelectedTrackReducer = (
  state = initialTrackListState,
  action: ISelectedTrackActionAction
): ITrackState => {
  const { type, payload, } = action;
  switch (type) {
    case SELECTED_TRACK_AWAIT:
      return {
        ...makeDeepCopy(state),
        await: true,
      }
    case SELECTED_TRACK_ERROR:
      return {
        ...makeDeepCopy(state),
        await: false,
        error: payload,
      }
    case SELECTED_TRACK_SUCCESS:
      return {
        ...makeDeepCopy(state),
        await: false,
        responseData: payload,
      }
    default:
      return makeDeepCopy(state);
  }
}