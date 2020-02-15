import React, { useState, useEffect } from 'react';
import { Module, Container } from 'common-ui';
import Typist from 'react-typist';
import projectImage from 'images/projects.svg';
import styles from './ProjectHeader.module.scss';

const ProjectHeader = () => {
  let timer = null;
  const [typistKey, setTypistKey] = useState(1);
  const onTypingDone = () => {
    timer = setTimeout(() => {
      setTypistKey(typistKey * -1);
    }, 100);
  };

  useEffect(
    () => () => {
      clearTimeout(timer);
    },
    [timer],
  );

  return (
    <Module className={styles.projectHeader}>
      <Container className={styles.headerContainer}>
        <h1 className={styles.title}>Projects</h1>
      </Container>

      <Container className={styles.terminalContainer}>
        <div className={styles.imageWrapper}>
          <img src={projectImage} alt="projects" />
        </div>
        <section className={styles.terminalWindow}>
          <div className={styles.terminalToolbar}>
            <span className={[styles.toolbarBtn, styles.toolbarBtnRed].join(' ')} />
            <span className={[styles.toolbarBtn, styles.toolbarBtnYellow].join(' ')} />
            <span className={[styles.toolbarBtn, styles.toolbarBtnGreen].join(' ')} />
          </div>
          <div className={styles.terminalPanel}>
            terry $ &nbsp;
            <Typist key={typistKey} onTypingDone={onTypingDone} className={styles.code}>
              {'    '}
              {'    '}
              {'I CODE therefore I AM             '}
              <Typist.Backspace count={30} />
            </Typist>
          </div>
        </section>
      </Container>
    </Module>
  );
};

export default ProjectHeader;
