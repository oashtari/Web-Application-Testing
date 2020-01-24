import React, {useState, useEffect} from 'react';
import Buttons from './Buttons';

export default function BallStrikeTracker() {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);

    return (
        <div>
        <h2>Balls: {ball} </h2>
        <h2>Strikes: {strike} </h2>
        <Buttons ball={ball} setBall={setBall} strike={strike} setStrike={setStrike}/>
    </div>)
}
