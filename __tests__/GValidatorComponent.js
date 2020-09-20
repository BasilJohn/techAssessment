/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {GValidatorComponent} from '../src/customComponent';
import {render} from '@testing-library/react-native';

const operation = jest.fn();


test('Renders GButtonComponent Component Correctly', () => {
  const tree = renderer.create(<GValidatorComponent operation={operation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
