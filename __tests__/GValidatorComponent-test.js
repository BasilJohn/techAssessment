/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { GValidatorComponent } from '../src/customComponent';

const operation = jest.fn();

test('Renders GButtonComponent Component Correctly', () => {
  const tree = renderer.create(<GValidatorComponent operation={operation} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check prop value is being set', () => {
  const wrap = shallow(
    <GValidatorComponent operation={operation} />
  );
  wrap.setProps({ final: 'Combined Object' });
  expect(wrap.find('Text').getElements()[4].props.children).toEqual('Combined Object');
});
