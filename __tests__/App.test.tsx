/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jest/no-disabled-tests */
import 'react-native';
import React from 'react';
import {App} from '../src/App';

import {cleanup, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// This is just for check of jest.mock
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const foo = 2;
const cc = console.log;
const LL = '\n';

describe('r01, L3I. App-nav renders... ', () => {
  //Unmounts React trees that were mounted with render to prevent memory leak.
  afterEach(cleanup);
  xit('react-test-renderer renders correctly', () => {
    renderer.create(<App />);
  });

  it('@testing-library/react-native renders correctly', () => {
    //render(<App />);
    const {toJSON} = render(<App />);
    //let _app = toJSON();
    //cc('_app =>' + LL, _app);
    //cc('children =>' + LL, _app?.children);
    //expect(toJSON()).toMatchSnapshot();
  });
});
