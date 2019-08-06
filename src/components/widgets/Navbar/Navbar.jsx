import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { NavItem, Container } from 'common-ui';
import './Navbar.scss';

const renderNavItems = items => (
  items.map(({ title, path }) => (
    <NavItem path={path} key={path}>
      {title}
    </NavItem>
  ))
);

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      dataJson {
        navItems {
          title
          path
        } 
      }
    }
  `);

  const items = data.dataJson.navItems;

  return (
    <div className="navbar">
      <Container className="navbar__container">
        {renderNavItems(items)}
      </Container>
    </div>
  );
};

export default Navbar;
