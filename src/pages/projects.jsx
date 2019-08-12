import React from 'react';
import Layout from 'components/layout';
import ProjectHeader from 'components/sections/projects/ProjectHeader/ProjectHeader';
import ProjectCards from 'components/sections/projects/ProjectCards/ProjectCards';

const ProjectsPage = () => (
  <Layout>
    <ProjectHeader />
    <ProjectCards />
  </Layout>
);

export default ProjectsPage;
