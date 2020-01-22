import React from 'react';
import logo from './logo.svg';
import './App.css';
import BallStrikeTracker from './Components/BallStrikeCard';


function App() {
  return (
    <div className="App">
      <h1>Baseball App</h1>
<BallStrikeTracker />
    </div>
  );
}

export default App;


// four buttons: 
// ball: count to 3, then reset balls and strikes to zero
// strike: count to 2, then reset balls and strikes to zero
// foul: add to strike, unles strike is already at 2
// hit: reset balls and strikes to zero

// two states: ball, strike
