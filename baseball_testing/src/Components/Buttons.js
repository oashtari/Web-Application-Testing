import React from 'react';
import {Button} from 'reactstrap';

export default function StrikeButton({Ball}, {Strike}) {

    function changeStrike(){
        console.log({Ball});
        if({Ball} >= 0 && {Ball} < 3){
            setBall(props.Ball + 1)
        }
    }

    function changeBall(){
        console.log('BALL')
    }

    function hitFoul(){
        console.log('FOUL')
    }

    function gotHit(){
        console.log('HIT')
    }

    return(
    <div className='all_buttons'>
        <Button color="danger" onClick={()=>changeStrike()}>Strike</Button>
        <Button color="secondary" onClick={()=>changeBall()}>Ball</Button>
        <Button color="warning" onClick={()=>hitFoul()}>Foul</Button>
        <Button color="success" onClick={()=>gotHit()}>HIT</Button>

    </div>)
    }