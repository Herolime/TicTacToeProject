import React from 'react';
import Square from '../src/Square';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Square />);
  });