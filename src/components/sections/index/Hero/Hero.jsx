import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Module, Container } from 'common-ui';
import Wave from 'components/widgets/Wave/Wave';
import heroImage from 'images/developer0-alt.svg';
import styles from './Hero.module.scss';

const Hero = () => {
  const renderIconLink = () => {
    const data = useStaticQuery(graphql`
      query IconLinkQuery {
        allIconLinksJson {
          nodes {
            icon
            name
            url
          }
        }
      }
    `);
    const { nodes } = data.allIconLinksJson;
    return nodes.map(link => (
      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
        <i className={`fa ${link.icon}`} aria-hidden="true" />
      </a>
    ));
  };

  return (
    <header>
      <Module className={styles.hero}>
        <Container className={styles.container}>
          <section className={styles.contentWrapper}>
            <h1 className={styles.title}>Terry Chen</h1>
            <h4 className={styles.subtitle}>Software Engineer @ ForUsAll</h4>
            <p className={styles.text}>
              Software Engineer who focuses on
              building elegant and high performance
              web application.
            </p>

            <div className={styles.links}>
              <div className={styles.iconGroup}>
                {renderIconLink()}
              </div>
            </div>
          </section>

          <section className={styles.imageWrapper}>
            <img
              src={heroImage}
              alt="developer"
              className={styles.image}
            />
          </section>
        </Container>

        <Wave />
      </Module>
    </header>
  );
};

export default Hero;
