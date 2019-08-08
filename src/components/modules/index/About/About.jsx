import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import { Container } from 'common-ui';
import profileImage from 'images/profile.png';
import styles from './About.module.scss';

const About = () => {
  return (
    <Container className={styles.about}>
      <section className={styles.card}>
        <div className={styles.cardImage}>
          <img src={profileImage} alt="profile" />
        </div>

        <div className={styles.cardContent}>
          <h2 className={styles.title}>
            ABOUT ME
          </h2>

          <p className={styles.text}>
              Hi, my name is Terry (Yen-Hsuan). I write code and enjoy building beautiful things.
              I am from Taiwan, studied in LA and live in San Francisco, so I call many places home.
              I own both EE & CS master degrees, and I did scientific brain research too.
              I love travel, music, dogs, coffee, and korean food!
          </p>
        </div>
      </section>
    </Container>
  );
};

export default About;
