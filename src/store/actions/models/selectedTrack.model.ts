import { SELECTED_TRACK_AWAIT, SELECTED_TRACK_ERROR, SELECTED_TRACK_SUCCESS } from "../action-types/selectedTrack.type";
import IBaseError from "./model.base";
import { ITrack } from "./tracks.model";

export interface ISelectedTrackError extends IBaseError { }

export interface ISelectedTrackSuccessAction {
    type: typeof SELECTED_TRACK_SUCCESS;
    payload: ITrack;
}
export interface ISelectedTrackErrorAction {
    type: typeof SELECTED_TRACK_ERROR;
    payload: ISelectedTrackError;
}
export interface ISelectedTrackAwaitAction {
    type: typeof SELECTED_TRACK_AWAIT;
    payload: null;
}
export interface ITrackState {
    await: boolean | null;
    responseData: ITrack | null;
    error: ISelectedTrackError | null;
}
export interface IAuditActionState {
    await: boolean | null;
    responseData: ITrack | null;
    error: ISelectedTrackError | null;
}
export type ISelectedTrackActionAction = ISelectedTrackSuccessAction
    | ISelectedTrackErrorAction
    | ISelectedTrackAwaitAction;