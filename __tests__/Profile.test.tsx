import 'react-native';
import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import {Profile} from '../src/components/Profile';

const navigation: any = null;

describe('Profile.tsx render', () => {
  //Unmounts React trees that were mounted with render to prevent memory leak.
  afterEach(cleanup);

  it('@testing-library/react-native renders correctly', () => {
    const {toJSON} = render(<Profile {...navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
