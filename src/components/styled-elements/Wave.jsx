// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import mediaQuery from 'utils/media-query';
import curve from 'images/curve.svg';

const FirstCurve: React$ComponentType<{}> = styled.div`
  position: absolute;
  bottom: -30px;
  height: 120px;
  width: 100%;
  background: url(${curve});
  pointer-events: none;
  background-repeat: repeat;
  background-size: 100% 100%;
  background-position-x: 100px;

  ${mediaQuery.below('sm')} {
    background-position-x: 0;
  }
`;

const SecondCurve: React$ComponentType<{}> = styled.div`
  position: absolute;
  bottom: -50px;
  height: 200px;
  width: 100%;
  background: url(${curve});
  pointer-events: none;
  background-repeat: repeat;
  background-size: 100% 100%;
  opacity: 0.1;
  background-position-x: 250px;
`;

const Wave = () => (
  <>
    <FirstCurve />
    <SecondCurve />
  </>
);

export default Wave;
