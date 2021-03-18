/* eslint-disable jest/no-disabled-tests */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {App} from '../src/App';
//import {cleanup, render} from 'react-native-testing-library';
import {cleanup, render} from '@testing-library/react-native';

xdescribe('Home', () => {
  afterEach(cleanup); //Unmounts React trees that were mounted with render to prevent memory leak.
  it('should render correctly', () => {
    const {toJSON} = render(<App />);
    //expect(toJSON()).toMatchSnapshot();
  });
});
