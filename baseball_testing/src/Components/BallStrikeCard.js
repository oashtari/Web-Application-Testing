import React, {useState, useEffect} from 'react';

export default function BallStrikeTracker() {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);

    return (
        <div>
        <h2>Balls: {ball}</h2>
        <h2>Strikes: {strike}</h2>
    </div>)
}