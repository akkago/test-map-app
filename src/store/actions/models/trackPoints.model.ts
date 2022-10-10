import { TRACK_POINTS_LIST_AWAIT, TRACK_POINTS_LIST_ERROR, TRACK_POINTS_LIST_SUCCESS } from "../action-types/trackPoints.type";
import IBaseError  from "./model.base";

export interface ITrackPointListError extends IBaseError { }

export interface ITrackPointListState {
    await: boolean | null;
    responseData: any[] | null;
    error: ITrackPointListError | null;
}

export interface ITrackPointListSuccessAction {
    type: typeof TRACK_POINTS_LIST_SUCCESS;
    payload: any[];
}
export interface ITrackPointListErrorAction {
    type: typeof TRACK_POINTS_LIST_ERROR;
    payload: ITrackPointListError;
}
export interface ITrackPointListAwaitAction {
    type: typeof TRACK_POINTS_LIST_AWAIT;
    payload: null;
}

export type TTrackPointListAction = ITrackPointListSuccessAction
    | ITrackPointListErrorAction
    | ITrackPointListAwaitAction;