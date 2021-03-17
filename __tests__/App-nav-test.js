import 'react-native';
import React from 'react';
import App from '../src/App-nav';

import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

describe('r02, L3H. App-nav renders... ', () => {
  it('react-test-renderer renders correctly', () => {
    renderer.create(<App />);
  });

  it('@testing-library/react-native renders correctly', () => {
    const {toJSON} = render(<App />);
    //expect(toJSON()).toMatchSnapshot();
  });
});
