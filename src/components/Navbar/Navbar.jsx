// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Container from 'components/styled-elements/Container';
import * as colors from 'utils/colors';
import { rgba } from 'utils/rgba';
import mediaQuery from 'utils/media-query';
import './Navbar.scss';

type NavProps = {|
  +theme: 'init' | 'dark',
  +children: React.Node,
|};

const NavbarWrapper: React$ComponentType<NavProps> = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => (props.theme === 'init' ? 'transparent' : rgba(colors.nearBlack, 0.95))};
  box-shadow: ${(props) => (props.theme === 'init' ? 'none' : rgba(colors.black, 0.1))};
  transition: all 0.3s linear;
  z-index: 1000;
`;

const NavbarContainer: React$ComponentType<NavProps> = styled(Container)`
  text-align: right;
  padding: ${(props) => (props.theme === 'init' ? '30px 15px' : '10px 15px')};
  transition: all 0.2s linear;

  ${mediaQuery.below('sm')} {
    text-align: center;
  }
`;

const NavItem: React$ComponentType<NavProps> = styled.span`
  position: relative;
  margin: 0 18px;
  font-size: 16px;
  opacity: ${(props) => (props.theme === 'init' ? 0.75 : 1)};

  ${mediaQuery.below('sm')} {
    font-size: 14px;
  }
`;

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      allNavItemsJson {
        nodes {
          path
          link
          title
        }
      }
    }
  `);

  const [scrollLoc, setScrollLoc] = React.useState(0);
  React.useEffect(() => {
    const handleWindowScroll = () => {
      const top = +window.scrollY;
      setScrollLoc(top);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  const items = data.allNavItemsJson.nodes;
  const theme = scrollLoc <= 40 ? 'init' : 'dark';

  return (
    <NavbarWrapper theme={theme}>
      <NavbarContainer theme={theme}>
        {items.map(({ title, path, link }) => (
          <NavItem key={path} theme={theme}>
            {path && (
              <Link
                activeClassName="active"
                className={theme === 'init' ? 'nav-item__link' : 'dark nav-item__link'}
                to={path}
              >
                {title}
              </Link>
            )}
            {link && (
              <a
                className={theme === 'init' ? 'nav-item__link' : 'dark nav-item__link'}
                target="_blank"
                href={link}
                rel="noopener noreferrer"
              >
                {title}
              </a>
            )}
          </NavItem>
        ))}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
