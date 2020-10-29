/**
 * @format
 * @flow strict-local
 */
import * as ActionTypes from '../../constants/actionConstants';

const setInputValue = (inputValue: string) => ({
  type: ActionTypes.SET_INPUT_VALUE,
  payload: inputValue,
});

const setEmulatorInformation = (isEmulator: string) => ({
  type: ActionTypes.SET_EMULATOR_INFO,
  payload: isEmulator,
});

export { setEmulatorInformation, setInputValue };
