import React from 'react';
// import { Link, useStaticQuery, graphql } from 'gatsby';
import projectImage from 'images/projects.svg';
import { Module, Container } from 'common-ui';
import Wave from 'src/components/widgets/Wave/Wave';
import styles from './ProjectHeader.module.scss';

const ProjectHeader = () => (
  <Module className={styles.projectHeader}>
    <Container className={styles.headerContainer}>
      <h1 className={styles.title}>My Project</h1>
    </Container>
  </Module>
);

export default ProjectHeader;
