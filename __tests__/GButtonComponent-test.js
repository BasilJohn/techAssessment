/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { GButtonComponent } from '../src/customComponent';

test('Renders GButtonComponent Component Correctly', () => {
  const tree = renderer.create(<GButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('GButtonComponent', () => {
  it('Displays press me', () => {
    const { getByTestId } = render(<GButtonComponent />);
    const text = getByTestId('btnText');
    expect(text.props.children).toEqual('Press me');
  });
});
