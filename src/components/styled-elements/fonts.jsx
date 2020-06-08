// @flow strict

import styled from 'styled-components';
import mediaQuery from 'utils/media-query';

export const H1: React$ComponentType<{}> = styled.h1`
  font-size: 54px;
  font-family: 'Fredoka One', sans-serif;
  font-weight: 500;

  ${mediaQuery.below('sm')} {
    font-size: 48px;
  }
`;

export const H2: React$ComponentType<{}> = styled.h2`
  font-size: 42px;
  font-family: 'Fredoka One', sans-serif;
  font-weight: 500;
`;

export const H3: React$ComponentType<{}> = styled.h3`
  font-size: 24px;
  font-family: 'Avenir', 'Avenir Next', 'Lato', Helvetica, sans-serif;
  font-weight: 500;
`;

export const H4: React$ComponentType<{}> = styled.h4`
  font-family: 'Avenir', 'Avenir Next', 'Lato', Helvetica, sans-serif;
  font-size: 24px;

  ${mediaQuery.below('sm')} {
    font-size: 18px;
  }
`;

export const P: React$ComponentType<{}> = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-family: 'Avenir', 'Avenir Next', 'Lato', Helvetica, sans-serif;

  ${mediaQuery.below('sm')} {
    font-size: 14px;
    line-height: 1.4;
  }
`;
