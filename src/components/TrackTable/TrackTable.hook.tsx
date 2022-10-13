import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITrack } from "../../store/actions/models/tracks.model";
import { selectedTrackSelector, trackPointsSelector, tracksSelector } from "../../store/reducers/tracks.reducer";
import { setSelectedTrack } from "../../store/saga/selectedTrack";
import { fetchTrackPoints } from "../../store/saga/trackPoints";
import { fetchTracks, updateTracks } from "../../store/saga/tracks";

const useTrackTable = () => {
    const dispatch = useDispatch();
    const tracks = useSelector(tracksSelector);
    const trackPoints = useSelector(trackPointsSelector);
    const selectedTrack = useSelector(selectedTrackSelector);

    const onSelectedTrackChange = (trackKey: React.Key[]) => {
        if (trackKey) {
            const track = tracks?.find(((d: any) => d.key === trackKey[0]));
            dispatch(setSelectedTrack(track));
        }
    };
    const onUpdateTracks = (data: ITrack[]) => {
        dispatch(updateTracks(data));
    }
    useEffect(() => {
        dispatch(fetchTracks());
        dispatch(fetchTrackPoints());
    }, []);

    return {
        tracks,
        trackPoints,
        selectedTrack,
        onUpdateTracks,
        onSelectedTrackChange
    }
}

export default useTrackTable;