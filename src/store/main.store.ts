import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './root.reducer';
import { watchSetSelectedTrack } from './saga/selectedTrack';
import { watchFetchTrackPoints } from './saga/trackPoints';
import { watchFetchTracks, watchUpdateTracks } from './saga/tracks';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchTracks);
sagaMiddleware.run(watchUpdateTracks);
sagaMiddleware.run(watchFetchTrackPoints);
sagaMiddleware.run(watchSetSelectedTrack);

export default store;