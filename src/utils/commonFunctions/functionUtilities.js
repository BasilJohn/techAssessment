/**
 * @format
 * @flow strict-local
 */
const combineObject = (objectOne: {name: string, place: string},
  objectTwo: {activity: string, level: string}) => {
  const combinedObject = { ...objectOne, ...objectTwo };
  return combinedObject;
};

const combineArray = (paramOne: Array<string>, paramTwo: Array<string>) => {
  const combinedArray = [...paramOne, ...paramTwo];
  return combinedArray;
};

const combineAny = (valueOne: number | string, valueTwo: number | string) => {
  return valueOne + valueTwo;
};

export { combineObject, combineArray, combineAny };
