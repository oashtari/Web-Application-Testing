import React from 'react';
import { render } from '@testing-library/react';
import Buttons, {changeStrike} from './Buttons';

test("App renders without crashing", () => {
    render(<Buttons />);
  });

test('buttons container', ()=> {
    const {getByTestId} = render(<Buttons/>);
  
    getByTestId("button_container");
  })


// test('changestrike function adds one ball', () => {
    
//     let ball = 1;
//     let strike = 1
//     const setBall = num => num = 0
//     const setStrike = num => strike = num

  
//   changeStrike(strike, setStrike, setBall);
//   expect(ball).toBe(1);
//   expect(strike).toBe(2);

//   ball =2;
//   strike = 2;
//   changeStrike(strike, setStrike, setBall);
//   expect(ball).toBe(0);
//   expect(strike).toBe(0);
// })