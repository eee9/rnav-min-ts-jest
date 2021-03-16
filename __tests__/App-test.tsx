/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable jest/no-disabled-tests */
import 'react-native';
import React from 'react';
import {App} from '../src/App';

const cc = console.log;
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//it.skip('renders correctly', () => {
xit('renders correctly', () => {
  renderer.create(<App />);
});

interface IData {
  one: number;
  two?: string;
  three: number;
}

xit('object assignment', () => {
  const _one = 1;
  const two = 'message 2';
  const three = 3;
  const data: IData = {one: _one, three};
  data['two'] = two;
  //cc('data => ', data);
  expect(data).toEqual({one: _one, two, three});
});

xtest('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

xtest('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

xtest('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // Це не спрацює через помилку окгруглення!
  //expect(value).toBe(0.3);
  // Це спрацює.
  expect(value).toBeCloseTo(0.3);
});

const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK');
};

xtest('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

interface IFetch {
  (message: string): void;
}
const fetchData = async (): Promise<string> => {
  return new Promise((res, rej) => {
    res('hi');
  });
  //return 'Hi!';
};

test('the data is peanut butter', async () => {
  const data = await fetchData();
  //cc('data => "' + data + '"');
  expect(data).toBe('hi');
});

xtest('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
