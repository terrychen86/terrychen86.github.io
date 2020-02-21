// @flow strict

import * as React from 'react';
import { graphql } from 'gatsby';
import { type IndexPageQuery } from 'types/graphql';
import Layout from '../components/layout';

import Hero from '../components/sections/index/Hero/Hero';
import About from '../components/sections/index/About/About';

type Props = {|
  data: IndexPageQuery,
|};

const Index = ({ data }: Props): React.Node => {
  const iconLinks = data.allIconLinksJson.edges.map(e => e.node);

  return (
    <Layout>
      <Hero iconLinks={iconLinks} />
      <About />
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
  }
`;
