/**
 * @format
 * @flow strict-local
 */
const combineObject = (
  objectOne: {name: string, place: string},
  objectTwo: {activity: string, level: string},
) => {
  let combinedObject = Object.assign({}, objectOne, objectTwo);
  return combinedObject;
};

const combineArray = (paramOne: Array<string>, paramTwo: Array<string>) => {
  let combinedArray = [...paramOne, ...paramTwo];
  return combinedArray;
};

const combineAny = (valueOne: number | string, valueTwo: number | string) => {
  return valueOne + valueTwo;
};

export {combineObject, combineArray, combineAny};
