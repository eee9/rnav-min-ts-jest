/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable jest/no-disabled-tests */
import 'react-native';
//import React from 'react';
//import {App} from '../src/App';

const cc = console.log;
//const mit = it;
//const mtest = test;
const mit = xit;
const mtest = xtest;
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

interface IData {
  one: number;
  two?: string;
  three: number;
}

mit('object assignment', () => {
  const _one = 1;
  const two = 'message 2';
  const three = 3;
  const data: IData = {one: _one, three};
  data['two'] = two;
  //cc('data => ', data);
  expect(data).toEqual({one: _one, two, three});
});

mtest('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

mtest('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

mtest('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // Це не спрацює через помилку окгруглення!
  //expect(value).toBe(0.3);
  // Це спрацює.
  expect(value).toBeCloseTo(0.3);
});

const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK');
};

mtest('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

const fetchDataCB = (cb: (s: string) => void): void => {
  setTimeout(() => {
    cb('peanut butter');
  }, 100);
};

mtest('the data is peanut butter /callback', (done) => {
  jest.setTimeout(2000);
  const callback = (data: string) => {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  };
  fetchDataCB(callback);
});

const fetchData = async (): Promise<string> => {
  return new Promise((res, rej) => {
    res('peanut butter');
  });
};

mtest('the data is peanut butter /promise', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

mtest('the data is peanut butter /resolves', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

mtest('the data is peanut butter /async', async () => {
  const data = await fetchData();
  //cc('data => "' + data + '"');
  expect(data).toBe('peanut butter');
});

xtest('the fetch fails with an error /rejects', () => {
  return expect(fetchData()).rejects.toMatch('error');
});

xtest('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
