import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { Container } from 'common-ui';
import './Navbar.scss';

const renderNavItems = items => (
  items.map(({ title, path }) => (
    <span className="nav-item" key={path}>
      <Link activeClassName="active" className="nav-item__link" to={path}>{title}</Link>
    </span>
  ))
);

const Navbar = () => {
  const [scrollLoc, setScrollLoc] = useState(0);
  useEffect(() => {
    const onWindowScroll = () => {
      const top = +window.scrollY;
      setScrollLoc(top);
    };

    window.addEventListener('scroll', onWindowScroll);

    return () => { window.removeEventListener('scroll', onWindowScroll); };
  }, []);

  const data = useStaticQuery(graphql`
    query NavbarQuery {
      allNavItemsJson {
        nodes {
          path
          title
        }
      }
    }
  `);

  const items = data.allNavItemsJson.nodes;
  const navbarStyle = (() => {
    if (scrollLoc > 40) {
      return 'navbar navbar--with_bg';
    }

    return 'navbar';
  })();

  return (
    <div className={navbarStyle}>
      <Container className="navbar__container">
        {renderNavItems(items)}
      </Container>
    </div>
  );
};

export default Navbar;
