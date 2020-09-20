/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ShowCaseScreen from '../src/screens/ShowCase/showCaseComponent';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureMockStore([]);
const store = mockStore({
  main: {
    inputValue: '',
    isEmulator: 'false',
  },
});

const comp = renderer.create(
  <Provider store={store}>
    <ShowCaseScreen />
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
    const wrapper = renderer.create(<Provider store={store}><ShowCaseScreen {...props} /></Provider>);
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
