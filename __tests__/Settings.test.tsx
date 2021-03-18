import 'react-native';
import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import {Settings} from '../src/components/Settings';

const navigation: any = null;

describe('Settings.tsx render', () => {
  //Unmounts React trees that were mounted with render to prevent memory leak.
  afterEach(cleanup);

  it('@testing-library/react-native renders correctly', () => {
    const {toJSON} = render(<Settings {...navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
