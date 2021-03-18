import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import {Home, IHome} from '../src/components/Home';

const navigation = null;
const props: IHome = {
  runVer: 'r00, L00',
  message: 'Message for Home.test!',
};

describe('Home.tsx render', () => {
  it('@testing-library/react-native renders correctly', () => {
    const {toJSON} = render(<Home {...props} {...navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
