/* eslint-disable jest/no-disabled-tests */
import 'react-native';
import React from 'react';
import {App} from '../src/App0';

import renderer from 'react-test-renderer';

xit('foo', () => {});

it('App0.tsx renders correctly', () => {
  renderer.create(<App />);
});
