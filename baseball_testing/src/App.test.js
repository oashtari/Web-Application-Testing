import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test("App renders without crashing", () => {
  render(<App />);
});

test('contains balls in display', ()=> {

  const container = render(<App/>);
  const getByText = container.getByText;

  getByText(/balls/i);
});

test('contains strikes in display', ()=> {

  const container = render(<App/>);
  const getByText = container.getByText;

  getByText(/strikes/i);
});