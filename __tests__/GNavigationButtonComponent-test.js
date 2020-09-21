/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme';
import { fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { GNavigationButtonComponent } from '../src/customComponent';

test('Renders GNavigationButtonComponent Component Correctly', () => {
  const tree = renderer.create(<GNavigationButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check prop value is being set', () => {
  const wrap = shallow(
    <GNavigationButtonComponent />
  );
  wrap.setProps({ title: 'Go to Welcome Screen' });
  expect(wrap.find('Text').props().children).toEqual('Go to Welcome Screen');
});

it('Click event', () => {
  const navProps = {
    navigation: {
      navigate: jest.fn(),
    }
  };
  const wrap = shallow(
    <GNavigationButtonComponent navProps={navProps} />
  );
  const buttonElemment = wrap.props().children;
  fireEvent(buttonElemment, 'onPress', 'middle');
  expect(navProps.navigation.navigate).toHaveBeenCalled();
  expect(navProps.navigation.navigate).toHaveBeenCalledTimes(1);
});
