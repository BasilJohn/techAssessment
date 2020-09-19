/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import {One} from '../src/One/One';
import mainReducer from '../src/reducers/reducer';
import configureMockStore from 'redux-mock-store';
import {setInputValue} from '../src/actions/mainActions';
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
    <One />
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
    <One
      store={store}
      setInputValue={props.setInputValue}
      navigation={props.navigation}
    />,
  );
  let instance;
  beforeEach(() => {
    instance = component.instance();
  });

  it('Call navigate Two', () => {
    instance.navigateToScreen('Two');
    expect(props.navigation.navigate).toHaveBeenCalled();
    expect(props.navigation.navigate).toHaveBeenCalledWith('Two');
    expect(props.navigation.navigate).toHaveBeenCalledTimes(1);
  });

  it('Call navigate Three', () => {
    instance.navigateToScreen('Three');
    expect(props.navigation.navigate).toHaveBeenCalled();
    expect(props.navigation.navigate).toHaveBeenCalledTimes(2);
    expect(props.navigation.navigate).toHaveBeenCalledWith('Three');
  });

  it('Change input Value', () => {
    instance.changeInputValue('New Text');
    expect(props.setInputValue).toHaveBeenCalled();
    expect(props.setInputValue).toHaveBeenCalledTimes(1);
    expect(props.setInputValue).toHaveBeenCalledWith('New Text');
  });

});
