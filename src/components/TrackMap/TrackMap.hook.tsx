import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedTrackSelector, tracksSelector } from "../../store/reducers/tracks.reducer";

const useTrackMap = () => {
    const tracks = useSelector(tracksSelector);
    const selectedTrack = useSelector(selectedTrackSelector);
   
    return {
        tracks,
        selectedTrack,
    }
}

export default useTrackMap;