import { combineReducers } from "redux";
import { TracksAllReducer } from "./reducers/tracks.reducer";

const RootReducer = combineReducers({
  tracks: TracksAllReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;