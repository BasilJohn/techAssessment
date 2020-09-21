/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { GNavigationButtonComponent } from '../src/customComponent';

test('Renders Button Component Correctly', () => {
  const tree = renderer.create(<GNavigationButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
