// /* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native';
import React from 'react';
import {App} from '../src/App';

import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

describe('r02, L3H. App-nav renders... ', () => {
  it('react-test-renderer renders correctly', () => {
    renderer.create(<App />);
  });

  it('@testing-library/react-native renders correctly', () => {
    render(<App />);
    //const {toJSON} = render(<App />);
    //expect(toJSON()).toMatchSnapshot();
  });
});