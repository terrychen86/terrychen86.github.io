// @flow strict-local

import * as React from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';
import { moveUp } from 'components/styled-elements/animations';

type AnimationWrapperType = {|
  +delay: number,
  +duration: number,
  +animated: boolean,
  +children: React.Node,
|};

const AnimationWrapper: React$ComponentType<AnimationWrapperType> = styled.div`
  animation: ${props => (props.animated ? moveUp : 'none')} ${props => props.duration}s ease-out;
  animation-delay: ${props => props.delay}s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

type Props = {|
  +delay: number,
  +duration: number,
  +children: React.Node,
|};

const Transition = ({ children, delay, duration }: Props): React.Node => {
  const [windowTop, setWindowTop] = React.useState<number>(+window.innerHeight);
  const [contentPos, setContentPos] = React.useState<number>(+window.innerHeight + 100);

  const contentRef = React.useCallback((node: ?HTMLElement) => {
    if (node != null) {
      setContentPos(node.getBoundingClientRect().top);
    }
  }, []);

  React.useEffect(() => {
    const scrollHandler = throttle(() => {
      const viewport: number = +window.scrollY + window.innerHeight;
      setWindowTop(viewport);
    }, 25);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const isContentVisible = contentPos < windowTop;

  return (
    <AnimationWrapper animated={isContentVisible} delay={delay} duration={duration}>
      <div ref={contentRef}>{children}</div>
    </AnimationWrapper>
  );
};

export default Transition;
