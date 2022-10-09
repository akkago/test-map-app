import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedTrackSelector, tracksSelector } from "../../store/reducers/tracks.reducer";
import { setSelectedTrack } from "../../store/saga/selectedTrack";
import { fetchTracks } from "../../store/saga/tracks";

const useTrackTable = () => {
    const dispatch = useDispatch();
    const tracks = useSelector(tracksSelector);
    const selectedTrack = useSelector(selectedTrackSelector);

    const onSelectedTrackChange = (trackKey: React.Key[]) => {
        if (trackKey) {
            const track = tracks?.find(((d: any) => d.key === trackKey[0]));
            dispatch(setSelectedTrack(track));
        }
    };

    useEffect(() => {
        dispatch(fetchTracks());
    }, [tracks]);

    return {
        tracks,
        selectedTrack,
        onSelectedTrackChange
    }
}

export default useTrackTable;