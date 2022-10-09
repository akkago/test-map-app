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
          <ResizePanel
            direction="e"
            style={{ flexGrow: '1' }}
            borderClass='customResizeBorder'
          >
            <div className='sidebar'>
              <TrackTable />
            </div>
          </ResizePanel>
          <TrackMap />
        </div>
      </div>
    </div>
  );
}

export default App;
