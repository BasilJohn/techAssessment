/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import {WelcomPage} from '../src/screens/WelcomePage/welcomePageComponent';
import mainReducer from '../src/store/reducers/reducer';
import configureMockStore from 'redux-mock-store';
import {setInputValue} from '../src/store/actions/mainActions';
import {NativeModules} from 'react-native';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

const mockStore = configureMockStore([]);
const store = mockStore({
  main: {
    inputValue: '',
    isEmulator: 'false',
  },
});
NativeModules.EmulatorInfo = {
  isEmulator: jest.fn(),
};

const comp = renderer.create(
  <Provider store={store}>
    <WelcomPage />
  </Provider>,
);
test('Renders Component One Correctly', () => {
  const tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('One Actions & Reducers', () => {
  it('Simulate Action', () => {
    let data = 'Basil';

    //Test Action Creators
    store.dispatch(setInputValue(data));
    expect(setInputValue(data)).toEqual({
      payload: data,
      type: 'SET_INPUT_VALUE',
    });

    //Test Reducers
    const afterState = mainReducer((main = {}), setInputValue(data));
    expect(afterState.main.inputValue).toEqual(data);
  });
});

describe('One Functions', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
    setInputValue: jest.fn(),
  };
  const component = shallow(
    <WelcomPage
      store={store}
      setInputValue={props.setInputValue}
      navigation={props.navigation}
    />,
  );
  let instance;
  beforeEach(() => {
    instance = component.instance();
  });

  it('Change input Value', () => {
    instance.changeInputValue('New Text');
    expect(props.setInputValue).toHaveBeenCalled();
    expect(props.setInputValue).toHaveBeenCalledTimes(1);
    expect(props.setInputValue).toHaveBeenCalledWith('New Text');
  });

});
