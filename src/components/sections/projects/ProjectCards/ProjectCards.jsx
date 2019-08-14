import React, { useState, useCallback, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import { Container } from 'common-ui';
import ScrollSpyEffect from 'utils/ScrollSpyEffect';

import codepadImg from 'images/project-cp.jpg';
import jsdsImg from 'images/project-jsds.png';
import codImg from 'images/project-cod.jpg';
import tweetsImg from 'images/project-tweets.png';
import yrbImg from 'images/project-yrb.jpg';
import spgImg from 'images/project-spg.jpg';
import snakeImg from 'images/project-snake.png';
import crudImg from 'images/project-crud.jpg';

import styles from './ProjectCards.module.scss';

const CARD_IMAGES = {
  codepad: codepadImg,
  jsds: jsdsImg,
  cod: codImg,
  tweets: tweetsImg,
  yrb: yrbImg,
  spg: spgImg,
  snake: snakeImg,
  crud: crudImg,
};

const renderCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          links {
            icon
            link
          }
          name
          title
          tags
        }
      }
    }
  `);

  const projects = data.allProjectsJson.nodes;

  return projects.map((project, i) => (
    <div key={project.name} className={styles.projectCardsCol}>
      <div className={styles.card}>
        <section className={`${styles.cardHeader} ${styles[`colorCard${i + 1}`]}`}>
          <h1 className={styles.cardTitle}>
            {project.title}
          </h1>
          <div className={styles.cardImage} style={{ backgroundImage: `url(${CARD_IMAGES[project.name]})` }} />
        </section>
        <section className={styles.cardDesc}>
          <div className={styles.cardTags}>
            {project.tags.map(tag => (<span key={tag} className={styles.cardTag}>{tag}</span>))}
          </div>
        </section>
        <section className={styles.btnGroup}>
          {
            project.links.map(link => (
              <a className={styles.iconBtn} key={link.icon} href={link.link} target="_blank" rel="noreferrer noopener">
                <i className={`fa fa-${link.icon} ${styles[link.icon]}`} aria-hidden="true" />
              </a>
            ))
          }
        </section>
      </div>
    </div>
  ));
};

const ProjectCards = () => {
  const [windowPos, setWindowPos] = useState(window.innerHeight);
  const [cardsPos, setCardsPos] = useState(window.innerHeight + 100);
  const cardsRef = useCallback((node) => {
    if (node !== null) {
      setCardsPos(node.getBoundingClientRect().top);
    }
  }, []);

  useEffect(ScrollSpyEffect((viewport) => {
    setWindowPos(viewport);
  }), []);

  const isVisible = cardsPos < windowPos;

  return (
    <section className={styles.projectCardsWrapper}>
      <Container ref={cardsRef} className={classnames(styles.projectCards, isVisible ? styles.fadeIn : '')}>
        {renderCards()}
      </Container>
    </section>
  );
};

export default ProjectCards;
