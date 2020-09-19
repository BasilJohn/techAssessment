/**
 * @format
 */

import {TouchableOpacity} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Two from '../src/Two/Two';
import mainReducer from '../src/reducers/reducer';
import configureMockStore from 'redux-mock-store';
import {setInputValue} from '../src/actions/mainActions';
import {NativeModules} from 'react-native';
import {Provider} from 'react-redux';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import * as redux from 'react-redux';

const mockStore = configureMockStore([]);
const store = mockStore({
  main: {
    inputValue: '',
    isEmulator: 'false',
  },
});

const comp = renderer.create(
  <Provider store={store}>
    <Two />
  </Provider>,
);
test('Renders Component Two Correctly', () => {
  const tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

