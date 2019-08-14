import React, { useEffect, useState, useCallback } from 'react';
import classnames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { window } from 'utils/SSR';
import ScrollSpyEffect from 'utils/ScrollSpyEffect';

import { Container, Button } from 'common-ui';
import profileImage from 'images/profile.png';
import sdeIcon from 'images/icon-job.png';
import sfIcon from 'images/icon-sf.png';
import webIcon from 'images/icon-webapp.png';
import reactIcon from 'images/icon-mean.png';
import rubyIcon from 'images/icon-ruby.png';
import codeIcon from 'images/icon-code.png';
import gameIcon from 'images/icon-game.png';
import uiIcon from 'images/icon-ui.png';

import styles from './About.module.scss';

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

const renderIconCards = () => {
  const data = useStaticQuery(graphql`
    query AboutMeIconQuery {
      allAboutMeIconJson {
        nodes {
          name
          title
          text
        }
      }
    }
  `);

  const icons = data.allAboutMeIconJson.nodes;
  return icons.map((icon, i) => (
    <div key={icon.name} className={classnames(styles.card, styles[`card${i + 1}`])}>
      <div className={styles.iconWrapper}>
        <img width="100%" src={ICONS[icon.name]} alt={`icon-${icon.name}`} />
      </div>

      <p className={styles.cardTitle}>
        {icon.title}
      </p>
      <p className={styles.cardText}>
        {icon.text}
      </p>
    </div>
  ));
};

const About = () => {
  const [windowTop, setWindowTop] = useState(window.innerHeight);
  const [contentPos, setContentPos] = useState(window.innerHeight + 100);
  const [cardsPos, setCardsPos] = useState(window.innerHeight + 100);

  const contentRef = useCallback((node) => {
    if (node !== null) {
      setContentPos(node.getBoundingClientRect().top);
    }
  }, []);

  const cardsRef = useCallback((node) => {
    if (node !== null) {
      setCardsPos(node.getBoundingClientRect().top);
    }
  }, []);

  useEffect(ScrollSpyEffect((viewport) => {
    setWindowTop(viewport);
  }), []);

  const isContentVisible = contentPos < windowTop;
  const isCardsVisible = cardsPos < windowTop;

  return (
    <main>
      <section>
        <Container className={styles.about}>
          <div className={classnames(styles.aboutMe, isContentVisible ? styles.fadeIn : '')} ref={contentRef}>
            <div className={styles.aboutMeImage}>
              <img src={profileImage} alt="profile" />
            </div>

            <div className={styles.aboutMeContent}>
              <h3 className={styles.title}>
                ABOUT ME
              </h3>

              <p className={styles.text}>
                  Hi, my name is Terry (Yen-Hsuan).
                  I write code and enjoy building beautiful and complicated things.
                  I call many places home. I am from Taiwan,
                  studied in LA and live in San Francisco now.
                  I own both EE & CS master degrees, and I did scientific brain research too.
                  I love travel, music, dogs, coffee, diet coke, and korean food!
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container ref={cardsRef} className={classnames(styles.cards, isCardsVisible ? styles.fadeIn : '')}>
          {renderIconCards()}
        </Container>
      </section>

      <section>
        <Container className={styles.btnContainer}>
          <Link to="/projects">
            <Button>
              See my projects
            </Button>
          </Link>
        </Container>
      </section>
    </main>
  );
};

export default About;