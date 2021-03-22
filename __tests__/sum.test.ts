/* eslint-disable jest/no-disabled-tests */
import {sum, div, init} from '../src/sum';

xit('foo', () => {});

describe('Test of sum.ts', () => {
  test('init()', () => {
    expect(init()).toBe('init() in libs/sum.ts');
  });

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

  test('div 14 with 2 = 7', () => {
    expect(div(14, 2)).toBe(7);
  });

  test('div 4 with 0 = Infinity', () => {
    expect(div(4, 0)).toBe(Infinity);
  });
});
