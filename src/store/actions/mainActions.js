/**
 * @format
 * @flow strict-local
 */

const setInputValue = (inputValue: string) => ({
  type: 'SET_INPUT_VALUE',
  payload: inputValue,
});

const setEmulatorInformation = (isEmulator: string) => ({
  type: 'SET_EMULATOR_INFO',
  payload: isEmulator,
});

export { setInputValue, setEmulatorInformation };
