import _ from 'lodash';

const ScrollSpyEffect = callback => () => {
  const scrollHandler = _.throttle(() => {
    const viewport = +window.scrollY + window.innerHeight;
    callback(viewport);
  }, 10);

  window.addEventListener('scroll', scrollHandler);
  return () => { window.removeEventListener('scroll', scrollHandler); };
};

export default ScrollSpyEffect;
