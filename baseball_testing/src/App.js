import React from 'react';
import './App.css';
import BallStrikeTracker from './Components/BallStrikeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div className="App">
      <h1>Baseball App</h1>
      <BallStrikeTracker />
    </div>
  );
}

export default App;

