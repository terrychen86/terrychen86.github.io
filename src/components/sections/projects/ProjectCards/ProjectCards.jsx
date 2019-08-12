import React from 'react';
import { Container } from 'common-ui';
import styles from './ProjectCards.module.scss';


const ProjectCards = () => {
  return (
    <section className={styles.projectCards}>
      <Container>
        <div className={styles.card}>
          <section className={styles.cardImage}>
            <div className={styles.img} />
          </section>
          <section className={styles.cardDesc}>
            <h3 className={styles.cardTitle}>
              Codepad
            </h3>
            <div className={styles.cardTags}>
              <span className={styles.cardTag}>test</span>
              <span className={styles.cardTag}>test</span>
              <span className={styles.cardTag}>test</span>
              <span className={styles.cardTag}>test</span>
              <span className={styles.cardTag}>test</span>
              <span className={styles.cardTag}>test</span>
            </div>
          </section>
          <section>
            <div className={styles.cardBtn}>

            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default ProjectCards;
