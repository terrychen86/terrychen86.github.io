import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Module.scss';

const Section = ({ className, ...props }) => {
  const { children } = props;
  const styles = classNames('section', className);

  return (
    <div className={styles}>
      { children }
    </div>
  );
};

Section.defaultProps = {
  className: '',
};


Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
