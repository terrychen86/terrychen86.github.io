// @flow strict

import _ from 'lodash';

type Callback = (viewport: number) => mixed;

const ScrollSpyEffect = (callback: Callback) => () => {
  const scrollHandler = _.throttle(() => {
    const viewport: number = +window.scrollY + window.innerHeight;
    callback(viewport);
  }, 10);

  window.addEventListener('scroll', scrollHandler);
  return () => {
    window.removeEventListener('scroll', scrollHandler);
  };
};

export default ScrollSpyEffect;
