import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'common-ui';
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
          name
          tags
          title
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
        <section>
          <div className={styles.cardBtn}>

          </div>
        </section>
      </div>
    </div>
  ));
};

const ProjectCards = () => (
  <section>
    <Container className={styles.projectCards}>
      {renderCards()}
    </Container>
  </section>
);

export default ProjectCards;
