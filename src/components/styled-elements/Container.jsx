// @flow strict

import styled from 'styled-components';
import mediaQuery from 'utils/media-query';

type Props = {};

const Container: React$ComponentType<Props> = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  padding: 40px;

  ${mediaQuery.below('sm')} {
    max-width: 414px;
    min-width: 320px;
  }

  ${mediaQuery.below('xxs')} {
    padding: 15px;
  }
`;

export default Container;
