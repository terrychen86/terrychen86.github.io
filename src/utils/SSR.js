// @flow strict

const $window: {
  innerHeight: number,
  scrollY: number,
  addEventListener: (string, *) => void,
  removeEventListener: (string, *) => void,
} = typeof window !== 'undefined' ? window : {};

export { $window as window };
export default {
  window: $window,
};
