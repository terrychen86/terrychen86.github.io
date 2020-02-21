// @flow strict-local

import styled from 'styled-components';

type Props = {};

const FullscreenModule: React$ComponentType<Props> = styled.div`
  height: 720px;
  min-height: 100vh;
  min-width: 320px;

  @media min-height(1080px) {
    min-height: 1080px;
  }
`;

export default FullscreenModule;
