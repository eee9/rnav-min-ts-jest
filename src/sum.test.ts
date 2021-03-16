//const sum = require('./sum');
import {sum} from './sum';

test('adds 2 + 1 to equal 3', () => {
  expect(sum(2, 1)).toBe(3);
});

test('adds 2 + 5 to equal 7', () => {
  expect(sum(2, 5)).toBe(7);
});

test('default sum() equals 0', () => {
  expect(sum()).toBe(0);
});

test('sum(value) equals value', () => {
  const value = 77;
  expect(sum(value)).toBe(value);
});

test('value - value = 0', () => {
  const value = 54;
  expect(sum(value, -1 * value)).toBe(0);
});
