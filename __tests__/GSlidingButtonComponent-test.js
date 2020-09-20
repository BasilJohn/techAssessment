/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {GSlidingButtonComponent} from '../src/customComponent';
import {render} from '@testing-library/react-native';


test('Renders SlidingButton Component Correctly', () => {
  const tree = renderer.create(<GSlidingButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});


describe('SlidingButton', () => {
  it('Displays press me', () => {
    const {getByTestId} = render(<GSlidingButtonComponent />);
    const text = getByTestId('txtSlideText');
    expect(text.props.children).toEqual('Slide me to continue');
  });
});