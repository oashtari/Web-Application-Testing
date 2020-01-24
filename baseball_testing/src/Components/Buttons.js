import React from 'react';
import {Button} from 'reactstrap';

export default function Buttons({ball, setBall, strike, setStrike}) {

    function changeStrike(strike){
        if(strike >= 0 && strike < 2){
            setStrike(strike+1)
        } else if (strike === 2) {
            setStrike(0)
            setBall(0)
        }
    }
    
    function changeBall(){
        if(ball >= 0 && ball < 3){
            setBall(ball+1)
        } else if (ball === 3) {
            setBall(0)
            setStrike(0)
        }
    }

    function hitFoul(){
        if(strike >= 0 && strike < 2){
            setStrike(strike+1)
        } else if (strike === 2) {
            setStrike(2)
        }
    }

    function gotHit(){
        setBall(0)
        setStrike(0)
    }

    return(
    <div className='all_buttons' data-testid="button_container">
        <Button color="danger" onClick={()=>changeStrike(strike, setStrike, setBall)}>Strike</Button>
        <Button color="secondary" onClick={()=>changeBall()}>Ball</Button>
        <Button color="warning" onClick={()=>hitFoul()}>Foul</Button>
        <Button color="success" onClick={()=>gotHit()}>HIT</Button>
    </div>)
    }