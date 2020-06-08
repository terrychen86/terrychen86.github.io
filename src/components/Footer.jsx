// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import Container from 'components/styled-elements/Container';

import * as colors from 'utils/colors';
import mediaQuery from 'utils/media-query';

const FooterWrapper: React$ComponentType<*> = styled.footer`
  background-color: ${colors.gray};
`;

const FooterContainer: React$ComponentType<*> = styled(Container)`
  padding: 20px;
  text-align: center;

  ${mediaQuery.below('sm')} {
    padding: 10px;
  }
`;

type FooterCopyProp = {|
  +type: 'mobile' | 'desktop',
  +children: React.Node,
|};

const FooterCopy: React$ComponentType<FooterCopyProp> = styled.p`
  color: ${colors.white};
  font-size: 12px;
  letter-spacing: 0.8px;

  ${mediaQuery.below('sm')} {
    display: ${props => (props.type === 'mobile' ? 'block' : 'none')};
  }

  ${mediaQuery.above('sm')} {
    display: ${props => (props.type === 'mobile' ? 'none' : 'block')};
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterCopy type="desktop">
        <>
          {'Copyright (c) 2019  |  Website Designed and Built by '}
          <strong>Terry Chen</strong>
          {'  | All right reserved.'}
        </>
      </FooterCopy>

      <FooterCopy type="mobile">
        <>
          {'Copyright (c) 2019  |  by '}
          <strong>Terry Chen</strong>
          {'  | All right reserved.'}
        </>
      </FooterCopy>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
