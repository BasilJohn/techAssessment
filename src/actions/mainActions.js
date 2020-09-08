/**
 * @format
 * @flow strict-local
 */

export const setInputValue = (inputValue: string) => ({
  type: 'SET_INPUT_VALUE',
  payload: inputValue,
});

export const setEmulatorInformation = (isEmulator: string) => ({
  type: 'SET_EMULATOR_INFO',
  payload: isEmulator,
});
