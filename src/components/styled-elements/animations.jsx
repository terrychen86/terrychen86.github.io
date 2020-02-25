// @flow strict

import { keyframes } from 'styled-components';

export const moveRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const moveLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const moveUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(6px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
