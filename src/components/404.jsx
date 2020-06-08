// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import FullscreenModule from 'components/styled-elements/FullscreenModule';
import Container from 'components/styled-elements/Container';
import Button from 'components/styled-elements/Button';
import { H2 } from 'components/styled-elements/fonts';
import { Link } from 'gatsby';

const Fullscreen: React$ComponentType<*> = styled(FullscreenModule)`
  background: linear-gradient(to right top, #2b3469, #4d4589, #7355a8, #9e65c5, #cc73df);
  height: 100%;
  min-height: 100vh;
`;

const ContentContainer: React$ComponentType<*> = styled(Container)`
  text-align: center;
`;

const Title: React$ComponentType<*> = styled(H2)`
  font-size: 24px;
  margin-top: 150px;
`;

const SubTitle: React$ComponentType<*> = styled(H2)`
  font-size: 24px;
`;

const ButtonWrapper: React$ComponentType<*> = styled.div`
  margin-top: 100px;
`;

const PageNotFound = () => (
  <Fullscreen>
    <ContentContainer>
      <Title>Oops!</Title>
      <SubTitle>Page not found :(</SubTitle>
      <ButtonWrapper>
        <Link to="/">
          <Button>Back to homepage</Button>
        </Link>
      </ButtonWrapper>
    </ContentContainer>
  </Fullscreen>
);

export default PageNotFound;
