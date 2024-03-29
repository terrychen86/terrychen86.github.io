// @flow strict

import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import ProjectHeader from 'components/sections/projects/ProjectHeader/ProjectHeader';
import ProjectCards from 'components/sections/projects/ProjectCards/ProjectCards';

import narrowConnection from 'utils/narrow-connection';
import type { GraphQLTypes$Query } from 'types/graphql';

type Props = {|
  +data: GraphQLTypes$Query,
|};

const ProjectsPage = ({ data }: Props) => (
  <Layout>
    <ProjectHeader />
    <ProjectCards projects={narrowConnection(data.allProjectsJson)} />
  </Layout>
);

export default ProjectsPage;

export const query = graphql`
  query ProjectPage {
    allProjectsJson {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`;
