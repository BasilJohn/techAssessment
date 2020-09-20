/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {
  combineObject,
  combineArray,
  combineAny,
} from '../src/utils/functionUtilities';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import ButtonComponent from '../src/customComponent/buttonComponent';
import SlidingButton from '../src/customComponent/slidingButton';

import One from '../src/One/One';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import mainReducer from '../src/reducers/reducer';

const mockStore = configureMockStore([]);
const store = mockStore({
  main: {
    inputValue: '',
    isEmulator: 'false',
  },
});
import {setInputValue} from '../src/actions/mainActions';

import {fireEvent, render, waitFor} from '@testing-library/react-native';

test('Test Combined Object', () => {
  var value = combineObject(
    {
      name: 'Basil',
      place: 'Chennai',
    },
    {
      activity: 'Keyboard',
      level: 'Intermediate',
    },
  );
  expect(value).toStrictEqual({
    name: 'Basil',
    place: 'Chennai',
    activity: 'Keyboard',
    level: 'Intermediate',
  });
});

test('Test Combined Array', () => {
  var value = combineArray(['Banana', 'WaterMelon'], ['Brinjal', 'Carrot']);
  expect(value).toStrictEqual(['Banana', 'WaterMelon', 'Brinjal', 'Carrot']);
});

test('Add two numbers', () => {
  var value = combineAny(1, 1);
  expect(value).toBe(2);
});

test('Add two string', () => {
  var value = combineAny('Basil', 'John');
  expect(value).toEqual('BasilJohn');
});

test('Add number and string', () => {
  var value = combineAny(10, 'Jumping Jacks');
  expect(value).toEqual('10Jumping Jacks');
});

test('Renders Button Component Correctly', () => {
  const tree = renderer.create(<ButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('ButtonComponent', () => {
  it('Displays press me', () => {
    const {getByTestId} = render(<ButtonComponent />);
    const text = getByTestId('btnText');
    expect(text.props.children).toEqual('Press me');
  });
});

test('Renders SlidingButton Component Correctly', () => {
  const tree = renderer.create(<SlidingButton />).toJSON();
  expect(tree).toMatchSnapshot();
});


describe('SlidingButton', () => {
  it('Displays press me', () => {
    const {getByTestId} = render(<SlidingButton />);
    const text = getByTestId('txtSlideText');
    expect(text.props.children).toEqual('Slide me to continue');
  });
});


