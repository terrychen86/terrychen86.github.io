// @flow strict

import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Hero from 'components/sections/index/Hero/Hero';
import About from 'components/sections/index/About/About';

import narrowConnection from 'utils/narrow-connection';

import type { GraphQLTypes$Query } from 'types/graphql';

type Props = {|
  +data: GraphQLTypes$Query,
|};

const Index = ({ data }: Props) => {
  const iconLinks = narrowConnection(data.allIconLinksJson);
  const aboutMeCards = narrowConnection(data.allAboutMeCardsJson);

  return (
    <Layout>
      <Hero iconLinks={iconLinks} />
      <About aboutMeCards={aboutMeCards} />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query IndexPage {
    allIconLinksJson {
      edges {
        node {
          ...IconLink
        }
      }
    }

    allAboutMeCardsJson {
      edges {
        node {
          ...AboutMeCard
        }
      }
    }
  }
`;
