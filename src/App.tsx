import React from 'react';
import './App.css';
import TrackMap from './components/TrackMap/TrackMap';
import TrackTable from './components/TrackTable/TrackTable';

function App() {
  return (
    <div className="App">
      <TrackTable />
      <TrackMap />
    </div>
  );
}

export default App;
