import { combineReducers } from "redux";

import { RootState } from "../root.reducer";
import { SelectedTrackReducer } from "./selectedTrack.reducer";
import { TracksReducer } from "./tracks.list.reducer";

export const TracksAllReducer = combineReducers({
  all: TracksReducer,
  selectedTrack: SelectedTrackReducer,
});

export const tracksSelector = (state: RootState) => state.tracks.all.responseData;
export const selectedTrackSelector = (state: RootState) => state.tracks.selectedTrack;
