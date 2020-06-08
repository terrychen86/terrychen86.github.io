// @flow strict

import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Container from 'components/styled-elements/Container';
import Transition from 'components/Transition';
import Card from 'components/Card';

import mediaQuery from 'utils/media-query';

import decoratorImg from 'images/background.png';
import websiteImg from 'images/project-website.png';
import codepadImg from 'images/project-cp.jpg';
import jsdsImg from 'images/project-jsds.png';
import codImg from 'images/project-cod.jpg';
import tweetsImg from 'images/project-tweets.png';
import yrbImg from 'images/project-yrb.jpg';
import spgImg from 'images/project-spg.jpg';
import snakeImg from 'images/project-snake.png';
import crudImg from 'images/project-crud.jpg';

import type { ProjectFragment } from 'types/graphql';

const CARD_IMAGES = {
  codepad: codepadImg,
  jsds: jsdsImg,
  cod: codImg,
  tweets: tweetsImg,
  yrb: yrbImg,
  spg: spgImg,
  snake: snakeImg,
  crud: crudImg,
  website: websiteImg,
  default: websiteImg,
};

const ProjectCardsWrapper: React$ComponentType<*> = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardsContainer: React$ComponentType<*> = styled(Container)`
  display: flex;
  flex-wrap: wrap;

  ${mediaQuery.below('sm')} {
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding: 20px 0;
    -webkit-overflow-scrolling: touch;
    max-width: 100%;
  }
`;

const CardsColumn: React$ComponentType<*> = styled.div`
  flex: 0 0 33.333332%;
  text-align: center;

  ${mediaQuery.below('md')} {
    flex: 0 0 50%;
  }

  ${mediaQuery.below('sm')} {
    flex: 0 0 260px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Background: React$ComponentType<*> = styled.div`
  position: absolute;
  bottom: -250px;
  right: 0;
  width: 100%;
  z-index: -1;

  ${mediaQuery.below('md')} {
    bottom: -50px;
  }

  img {
    width: 100%;
  }
`;

type Props = {|
  +projects: Array<ProjectFragment>,
|};

const ProjectCards = ({ projects }: Props) => {
  return (
    <ProjectCardsWrapper>
      <Transition delay={0} duration={0.7}>
        <CardsContainer>
          {projects.map((project, i) => (
            <CardsColumn key={project.name}>
              <Card
                title={project.title || ''}
                tags={project.tags || []}
                links={(project.links || []).map(l => ({
                  icon: l?.icon,
                  link: l?.link,
                }))}
                imgSrc={CARD_IMAGES[project.name || 'default']}
                order={i}
              />
            </CardsColumn>
          ))}
        </CardsContainer>
      </Transition>

      <Background>
        <img src={decoratorImg} alt="decorator" />
      </Background>
    </ProjectCardsWrapper>
  );
};

export default ProjectCards;

export const query = graphql`
  fragment Project on ProjectsJson {
    links {
      icon
      link
    }
    name
    title
    tags
  }
`;
