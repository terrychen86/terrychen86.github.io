// @flow strict

import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Container from 'components/styled-elements/Container';
import FullscreenWrapper from 'components/styled-elements/FullscreenModule';
import { H1, H4, P } from 'components/styled-elements/fonts';
import * as keyframes from 'components/styled-elements/animations';
import Wave from 'components/styled-elements/Wave';
import mediaQuery from 'utils/media-query';
import * as colors from 'utils/colors';
import { rgba } from 'utils/rgba';
import heroImage from 'images/developer.svg';

const HeroWrapper: React$ComponentType<{}> = styled(FullscreenWrapper)`
  position: relative;
  background-image: linear-gradient(to right top, #3671bf, #2579bf, #1680be, #1386bb, #1e8cb8);
  padding-bottom: 100px;
  min-height: 98.5vh;
  overflow: hidden;

  @media (min-height: 1080px) {
    min-height: 1080px;
  }
`;

const HeroContainer: React$ComponentType<{}> = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;

  ${mediaQuery.below('sm')} {
    padding-top: 80px;
    flex-direction: column-reverse;
    justify-content: center;
  }

  ${mediaQuery.below('xxs')} {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

const Content: React$ComponentType<{}> = styled.section`
  min-width: 340px;

  ${mediaQuery.below('sm')} {
    min-width: 100%;
    text-align: center;
  }
`;

const Headline: React$ComponentType<{}> = styled(H1)`
  color: ${rgba(colors.nearWhite, 0.9)};
  animation: ${keyframes.moveRight} 0.75s ease-out;
`;

const SubHeadline: React$ComponentType<{}> = styled(H4)`
  color: ${colors.gold};
  animation: ${keyframes.moveLeft} 0.75s ease-out;
  margin-bottom: 24px;
`;

const Text: React$ComponentType<{}> = styled(P)`
  color: ${rgba(colors.nearWhite, 0.7)};
  font-size: 18px;
  animation: ${keyframes.fadeIn} 0.75s ease-out;

  ${mediaQuery.below('sm')} {
    text-align: center;
    font-size: 16px;
  }
`;

const IconGroupWrapper: React$ComponentType<{}> = styled.div`
  text-align: left;

  ${mediaQuery.below('sm')} {
    text-align: center;
  }
`;

const IconGroup: React$ComponentType<{}> = styled.div`
  display: inline-flex;
  width: 200px;
  justify-content: space-around;
  margin-top: 54px;

  i {
    font-size: 28px;
    color: ${colors.white};
    transition: all linear 0.25s;
    opacity: 0.3;
  }

  i:hover {
    opacity: 1;
  }
`;

const ImageWrapper: React$ComponentType<{}> = styled.div`
  min-width: 60rem;
  margin-left: 10rem;

  ${mediaQuery.below('sm')} {
    min-width: 100%;
    margin-left: 0;
  }
`;

const Image: React$ComponentType<{}> = styled.img`
  width: 100%;
`;

type Props = {|
  +iconLinks: Array<GatsbyTypes$IconLinkFragment>,
|};

const Hero = ({ iconLinks }: Props) => (
  <HeroWrapper>
    <HeroContainer>
      <Content>
        <Headline>Terry Chen</Headline>
        <SubHeadline>Software Engineer @ Flexport</SubHeadline>
        <Text>Software Engineer who focuses on building elegant and high performance web application.</Text>

        <IconGroupWrapper>
          <IconGroup>
            {iconLinks.map((link) => (
              <>
                {link.name != null && link.url != null && link.icon != null && (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                    <i className={`fa ${link.icon || ''}`} aria-hidden="true" />
                  </a>
                )}
              </>
            ))}
          </IconGroup>
        </IconGroupWrapper>
      </Content>

      <ImageWrapper>
        <Image src={heroImage} alt="developer" />
      </ImageWrapper>
    </HeroContainer>

    <Wave />
  </HeroWrapper>
);

export default Hero;

export const query = graphql`
  fragment IconLink on IconLinksJson {
    name
    url
    icon
  }
`;
