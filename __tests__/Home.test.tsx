/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native';
import React from 'react';
//import {DrawerScreenProps} from '@react-navigation/drawer';

import {render} from '@testing-library/react-native';

import {Home} from '../src/components/Home';

//import {RootDrawerParamList} from '../src/types';

//type IDr = DrawerScreenProps<RootDrawerParamList>;
//const a: IDr = jest.mock();
const props: any = '';

describe('Home.tsx render', () => {
  it('@testing-library/react-native renders correctly', () => {
    const {toJSON} = render(<Home {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
