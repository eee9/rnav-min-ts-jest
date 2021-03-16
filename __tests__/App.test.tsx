/* eslint-disable jest/no-disabled-tests */
import 'react-native';
import React from 'react';
import {App} from '../src/App';

import renderer from 'react-test-renderer';

//it.skip('renders correctly', () => {
xit('App.tsx renders correctly', () => {
  renderer.create(<App />);
});
