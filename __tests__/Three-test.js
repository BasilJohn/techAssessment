/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Three from '../src/Three/Three';
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
    <Three />
  </Provider>
);
test('Renders Component Three Correctly', () => {
  const tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Check Value', () => {

    const props = {
        navigation: {
          navigate: jest.fn(),
        },
        setInputValue: jest.fn(),
      };

  it('Check Style', () => {
    const navigate = jest.fn();
    const wrapper = renderer.create(<Provider store={store}><Three {...props} /></Provider>);
    expect(wrapper.toJSON().children[3].children[4].children[0].children[0].children[1].props.style).toEqual({
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      height: '100%',
      backgroundColor: 'rgba(110, 177, 247, 0.8)',
      width: '20%'
    });
 
  });
});
