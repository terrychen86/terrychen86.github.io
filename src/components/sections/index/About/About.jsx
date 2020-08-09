// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import Transition from 'components/Transition';
import Container from 'components/styled-elements/Container';
import Button from 'components/styled-elements/Button';
import { H3, P } from 'components/styled-elements/fonts';

import mediaQuery from 'utils/media-query';
import * as colors from 'utils/colors';

import profileImage from 'images/profile.png';
import sdeIcon from 'images/icon-job.png';
import sfIcon from 'images/icon-sf.png';
import webIcon from 'images/icon-webapp.png';
import reactIcon from 'images/icon-mean.png';
import rubyIcon from 'images/icon-ruby.png';
import codeIcon from 'images/icon-code.png';
import gameIcon from 'images/icon-game.png';
import uiIcon from 'images/icon-ui.png';

import type { GraphQLTypes$AboutMeCardsJson } from 'types/graphql';

const ICONS = {
  sde: sdeIcon,
  sf: sfIcon,
  web: webIcon,
  react: reactIcon,
  ruby: rubyIcon,
  code: codeIcon,
  game: gameIcon,
  ui: uiIcon,
};

const AboutMeContainer: React$ComponentType<{}> = styled.section`
  display: flex;
  align-items: center;

  ${mediaQuery.below('sm')} {
    flex-direction: column;
  }
`;

const AboutMeImage: React$ComponentType<{}> = styled.figure`
  flex-shrink: 0;
  flex-grow: 0;
  width: 180px;
  height: 180px;
  padding: 4px;
  background: linear-gradient(270deg, ${colors.pink}, ${colors.deepPink});
  border-radius: 100%;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const AboutMeContentWrapper: React$ComponentType<{}> = styled.div`
  margin-left: 80px;

  ${mediaQuery.below('sm')} {
    margin-top: 40px;
    margin-left: 0;
  }
`;

const AboutMeTitle: React$ComponentType<{}> = styled(H3)`
  color: ${colors.blackBlue};
  margin-bottom: 10px;

  ${mediaQuery.below('sm')} {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const AboutMeCopy: React$ComponentType<{}> = styled(P)`
  color: ${colors.blackBlue};
`;

const CardsContainer: React$ComponentType<{}> = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;

  ${mediaQuery.below('lg')} {
    max-width: 780px;
  }

  ${mediaQuery.below('md')} {
    margin-top: 10px;
    overflow-x: scroll;
    flex-wrap: nowrap;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  ${mediaQuery.below('sm')} {
    max-width: 414px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const CardTitle: React$ComponentType<{}> = styled(P)`
  color: ${colors.white};
  font-size: 14px;
`;

const CardText: React$ComponentType<{}> = styled(P)`
  color: ${colors.white};
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
`;

type CardProps = {|
  +id: number,
  +children: React.Node,
|};

const Card: React$ComponentType<CardProps> = styled.div`
  display: inline-block;
  flex-shrink: 0;
  width: 220px;
  height: 150px;
  margin: 5px;
  text-align: center;
  padding: 15px 0;
  background-color: ${(props) => colors.cardColors[props.id]};
`;

const IconWrapper: React$ComponentType<{}> = styled.div`
  margin: 12px auto;
  width: 48px;
  height: 48px;
`;

const ButtonContainer: React$ComponentType<{}> = styled(Container)`
  text-align: center;
`;

const ButtonCopy: React$ComponentType<{}> = styled(P)`
  letter-spacing: 2px;
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 14px;
`;

type Props = {|
  +aboutMeCards: Array<GraphQLTypes$AboutMeCardsJson>,
|};

const About = ({ aboutMeCards }: Props) => {
  return (
    <main>
      <Container>
        <Transition delay={0} duration={0.7}>
          <AboutMeContainer>
            <AboutMeImage>
              <img src={profileImage} alt="profile" />
            </AboutMeImage>

            <AboutMeContentWrapper>
              <AboutMeTitle>ABOUT ME</AboutMeTitle>
              <AboutMeCopy>
                Hi, my name is Terry (Yen-Hsuan). I write code and enjoy building beautiful and complicated things. I
                call many places home. I am from Taiwan, studied in LA and live in San Francisco now. I own both EE & CS
                master degrees, and I did scientific brain research too. I love travel, music, dogs, coffee, diet coke,
                and korean food!
              </AboutMeCopy>
            </AboutMeContentWrapper>
          </AboutMeContainer>
        </Transition>
      </Container>

      <Transition delay={0} duration={0.7}>
        <CardsContainer>
          {aboutMeCards.map(({ name, title, text }, i) => (
            <>
              {name != null && (
                <Card key={name} id={i}>
                  <IconWrapper>
                    <img width="100%" src={ICONS[name]} alt={`icon-${name}`} />
                  </IconWrapper>

                  {title != null && <CardTitle>{title}</CardTitle>}
                  {text != null && <CardText>{text}</CardText>}
                </Card>
              )}
            </>
          ))}
        </CardsContainer>
      </Transition>

      <ButtonContainer>
        <Link to="/projects">
          <Button>
            <ButtonCopy>See my projects</ButtonCopy>
          </Button>
        </Link>
      </ButtonContainer>
    </main>
  );
};

export default About;

export const query = graphql`
  fragment AboutMeCard on AboutMeCardsJson {
    name
    text
    title
  }
`;
