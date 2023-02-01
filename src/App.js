import React from 'react'
import './App.css';
import Google from './Google';
import GoogleGet from './GoogleGet';
import getSheetData from './GoogleGet';

function App() {
  
  return (
    <div className="App">
      <h1>Fatch data form Google Sheet</h1>
      <Google getSheetData={getSheetData}/>
      <GoogleGet/>
    </div>
  );
}

export default App;
