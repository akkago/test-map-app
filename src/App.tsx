import React from 'react';
import './App.css';
import TrackMap from './components/TrackMap/TrackMap';
import TrackTable from './components/TrackTable/TrackTable';
import ResizePanel from "react-resize-panel";


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='body'>
          <ResizePanel direction="e" style={{ flexGrow: '1' }} >
            <div className='sidebar withMargin panel'>
              <TrackTable />
            </div>
          </ResizePanel>
          <div className='content panel'>  <TrackMap /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
