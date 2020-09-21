/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MiddleStationScreen from '../src/screens/MiddleStation/middleStationComponent';

const mockStore = configureMockStore([]);
const store = mockStore({
  main: {
    inputValue: '',
    isEmulator: 'false',
  },
});

const comp = renderer.create(
  <Provider store={store}>
    <MiddleStationScreen />
  </Provider>,
);
test('Renders Component Two Correctly', () => {
  const tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});
