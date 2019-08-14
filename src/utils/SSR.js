const $window = typeof window !== 'undefined' && window;

export { $window as window };
export default {
  window: $window,
};
