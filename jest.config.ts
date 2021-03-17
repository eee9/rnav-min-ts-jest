import type {Config} from '@jest/types';

// Sync object
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config_: Config.InitialOptions = {
  verbose: true,
  //verbose: false,
  preset: 'react-native',
  setupFiles: ['./jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
};

// Async function
const config = async (): Promise<Config.InitialOptions> => {
  return {
    //verbose: true,
    verbose: false,
    preset: 'react-native',
    setupFiles: ['./jest-setup.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
    ],
  };
};

export default config;
