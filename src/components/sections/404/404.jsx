import React from 'react';
import { Link } from 'gatsby';
import { Module, Container, Button } from 'common-ui';
import styles from './404.module.scss';

const PageNotFound = () => (
  <Module className={styles.pageNotFound}>
    <Container className={styles.container}>
      <h2 className={styles.title}>Oops!</h2>
      <h2 className={styles.secondaryTitle}>Page not found :(</h2>
      <Link to="/">
        <Button className={styles.button}>
          BACK TO HOMEPAGE
        </Button>
      </Link>
    </Container>
  </Module>
);

export default PageNotFound;
