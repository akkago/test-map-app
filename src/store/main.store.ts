import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './root.reducer';
import { watchSetSelectedTrack } from './saga/selectedTrack';
import { watchFetchTracks } from './saga/tracks';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchTracks);
sagaMiddleware.run(watchSetSelectedTrack);

export default store;