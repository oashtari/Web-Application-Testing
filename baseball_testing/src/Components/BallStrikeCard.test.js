import React from 'react';
import { render } from '@testing-library/react';
import BallStrikeCard from './BallStrikeCard';
import renderer from 'react-test-renderer';


test('matches the snapshot', () => {
    const tree = renderer.create(<BallStrikeCard />).toJSON()

    expect(tree).toMatchSnapshot()
});