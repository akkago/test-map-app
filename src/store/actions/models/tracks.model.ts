import { TRACKS_LIST_AWAIT, TRACKS_LIST_ERROR, TRACKS_LIST_SUCCESS } from "../action-types/tracks.type";
import IBaseError  from "./model.base";

export interface ITrackListError extends IBaseError { }

export interface ITrack {
    key: string;
    name: string;
    start: number[];
    end: number[];
    track: any;
}

export interface ITrackListState {
    await: boolean | null;
    responseData: ITrack[] | null;
    error: ITrackListError | null;
}

export interface ITracksListSuccessAction {
    type: typeof TRACKS_LIST_SUCCESS;
    payload: ITrack[];
}
export interface ITracksListErrorAction {
    type: typeof TRACKS_LIST_ERROR;
    payload: ITrackListError;
}
export interface ITracksListAwaitAction {
    type: typeof TRACKS_LIST_AWAIT;
    payload: null;
}

export type TTracksListAction = ITracksListSuccessAction
    | ITracksListErrorAction
    | ITracksListAwaitAction;