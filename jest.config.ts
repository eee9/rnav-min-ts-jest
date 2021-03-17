// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  //verbose: false,
};
export default config;

/*
// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};
*/
