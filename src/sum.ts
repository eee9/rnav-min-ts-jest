export const init = (): string => 'init() in libs/sum.ts';

export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export const div = (a: number, b: number): number => {
  if (b === 0) {
    Error('Zero divide');
  }
  return a / b;
};
