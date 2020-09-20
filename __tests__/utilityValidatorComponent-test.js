/**
 * @format
 */

import 'react-native';
import {
  combineObject,
  combineArray,
  combineAny,
} from '../src/utils/commonFunctions/functionUtilities';

test('Test Combined Object', () => {
  var value = combineObject(
    {
      name: 'Basil',
      place: 'Chennai',
    },
    {
      activity: 'Keyboard',
      level: 'Intermediate',
    },
  );
  expect(value).toStrictEqual({
    name: 'Basil',
    place: 'Chennai',
    activity: 'Keyboard',
    level: 'Intermediate',
  });
});

test('Test Combined Array', () => {
  var value = combineArray(['Banana', 'WaterMelon'], ['Brinjal', 'Carrot']);
  expect(value).toStrictEqual(['Banana', 'WaterMelon', 'Brinjal', 'Carrot']);
});

test('Add two numbers', () => {
  var value = combineAny(1, 1);
  expect(value).toBe(2);
});

test('Add two string', () => {
  var value = combineAny('Basil', 'John');
  expect(value).toEqual('BasilJohn');
});

test('Add number and string', () => {
  var value = combineAny(10, 'Jumping Jacks');
  expect(value).toEqual('10Jumping Jacks');
});




