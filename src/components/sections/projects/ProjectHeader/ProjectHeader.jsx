// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import Container from 'components/styled-elements/Container';
import { H1 } from 'components/styled-elements/fonts';

import * as colors from 'utils/colors';
import { rgba } from 'utils/rgba';
import mediaQuery from 'utils/media-query';

import projectImage from 'images/projects.svg';
import styles from 'components/sections/projects/ProjectHeader/ProjectHeader.module.scss';

const ProjectHeaderWrapper: React$ComponentType<*> = styled.div`
  position: relative;
  height: 450px;
  background-image: linear-gradient(to right top, #f067a2, #cf70be, #a47acf, #7183d2, #3887c8);
`;

const HeaderContainer: React$ComponentType<*> = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 60%;
  padding-top: 100px;
  z-index: 2;
  position: relative;
`;

const Heading: React$ComponentType<*> = styled(H1)`
  color: ${rgba(colors.nearWhite, 0.9)};
  font-size: 42px;
  letter-spacing: 3px;
  text-shadow: 2px 3px 0 ${colors.deepGray};
`;

const Terminal: React$ComponentType<*> = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 40%;
  padding: 0 20px;
  z-index: 2;
`;

const TerminalImageWrapper: React$ComponentType<*> = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 20px;
  text-align: center;
  z-index: 0;

  ${mediaQuery.below('sm')} {
    bottom: 125px;
    padding: 0 10px;
  }

  & > img {
    width: 800px;
    opacity: 0.7;

    ${mediaQuery.below('md')} {
      width: 720px;
    }

    ${mediaQuery.below('sm')} {
      width: 100%;
    }
  }
`;

const TerminalWindow: React$ComponentType<*> = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1;
  z-index: 2;
`;

const TerminalToolbar: React$ComponentType<*> = styled.div`
  position: relative;
  display: inline-block;
  flex: 0 0;
  height: 2.5rem;
  padding: 0 0.5rem;
  background-color: ${colors.nearBlack};
  z-index: 2;
`;

type TerminalToolbarDotProps = {|
  +color: 'red' | 'yellow' | 'green',
|};

const TerminalToolbarDot: React$ComponentType<TerminalToolbarDotProps> = styled.span`
  display: inline-block;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  margin: 5px;
  background-color: ${props =>
    ({
      red: colors.terminalRed,
      yellow: colors.terminalYellow,
      green: colors.terminalGreen,
    }[props.color])};
`;

const TerminalPanel: React$ComponentType<*> = styled.div`
  background: #222;
  font-family: monospace;
  padding: 15px 30px;
  color: ${colors.terminalGreen};
  flex: 1 1;

  ${mediaQuery.above('sm')} {
    font-size: 28px;
  }
`;

const ProjectHeader = () => {
  let timer = null;
  const [typistKey, setTypistKey] = React.useState(1);
  const onTypingDone = () => {
    timer = setTimeout(() => {
      setTypistKey(typistKey * -1);
    }, 100);
  };

  React.useEffect(
    () => () => {
      clearTimeout(timer);
    },
    [timer],
  );

  return (
    <ProjectHeaderWrapper>
      <HeaderContainer>
        <Heading>Projects</Heading>
      </HeaderContainer>

      <Terminal>
        <TerminalImageWrapper>
          <img src={projectImage} alt="projects" />
        </TerminalImageWrapper>
        <TerminalWindow>
          <TerminalToolbar>
            <TerminalToolbarDot color="red" />
            <TerminalToolbarDot color="yellow" />
            <TerminalToolbarDot color="green" />
          </TerminalToolbar>
          <TerminalPanel>
            terry $ &nbsp;
            <Typist key={typistKey} onTypingDone={onTypingDone} className={styles.code}>
              {'    '}
              {'    '}
              {'I CODE therefore I AM             '}
              <Typist.Backspace count={30} />
            </Typist>
          </TerminalPanel>
        </TerminalWindow>
      </Terminal>
    </ProjectHeaderWrapper>
  );
};

export default ProjectHeader;
