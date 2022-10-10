import { combineReducers } from "redux";

import { RootState } from "../root.reducer";
import { SelectedTrackReducer } from "./selectedTrack.reducer";
import { TracksReducer } from "./tracks.list.reducer";
import { TrackPointsReducer } from "./tracksPoints.reducer";

export const TracksAllReducer = combineReducers({
  all: TracksReducer,
  trackPoints: TrackPointsReducer,
  selectedTrack: SelectedTrackReducer,
});

export const tracksSelector = (state: RootState) => state.tracks.all.responseData;
export const trackPointsSelector = (state: RootState) => state.tracks.trackPoints.responseData;
export const selector = (state: RootState) => state.tracks;
export const selectedTrackSelector = (state: RootState) => state.tracks.selectedTrack;
