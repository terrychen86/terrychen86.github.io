import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import './NavItem.scss';

const NavItem = ({ className, ...props }) => {
  const { children, path } = props;
  const styles = classNames('nav-item', className);

  return (
    <span className={styles} key={path}>
      <Link activeClassName="active" className="nav-item__link" to={path}>{children}</Link>
    </span>
  );
};

NavItem.defaultProps = {
  className: '',
  path: '/',
};


NavItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default NavItem;
