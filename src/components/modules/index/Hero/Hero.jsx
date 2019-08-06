import React from 'react';
import FontAwesome from 'react-fontawesome';

import { Module, Container } from 'common-ui';
import heroImage2x from 'images/developer-2x.png';
import heroImage3x from 'images/developer-3x.png';
import heroImage4x from 'images/developer-4x.png';
import styles from './Hero.module.scss';

const Hero = () => (
  <Module className={styles.hero}>
    <Container className={styles.container}>
      <section className={styles.contentWrapper}>
        <h1 className={styles.title}>Terry Chen</h1>
        <h4 className={styles.subtitle}>Software Engineer @ ForUsAll</h4>
        <p className={styles.text}>
          Software Engineer who focuses on
          building elegant and high performace
          web application.
        </p>

        <div className={styles.iconGroup}>
          <FontAwesome
            name="rocket"
          />
        </div>
      </section>

      <section className={styles.imageWrapper}>
        <img
          srcSet={`
            ${heroImage2x} 1x,
            ${heroImage2x} 2x,
            ${heroImage3x} 3x,
            ${heroImage4x} 4x,
          `}
          src={heroImage2x}
          alt="developer"
          className={styles.image}
        />
      </section>
    </Container>
  </Module>
);

export default Hero;
