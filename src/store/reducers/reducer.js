/**
 * @format
 * @flow strict-local
 */

import { combineReducers } from 'redux';
import * as ActionTypes from '../../constants/actionConstants';

const INITIAL_STATE = {
  inputValue: '',
  isEmulator: false,
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case ActionTypes.SET_EMULATOR_INFO:
      return {
        ...state,
        isEmulator: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  main: mainReducer,
});
