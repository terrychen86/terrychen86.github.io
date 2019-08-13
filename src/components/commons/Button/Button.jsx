import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ className, ...props }) => {
  const { children } = props;
  const styles = classNames('button', className);
  return (
    <div className={styles}>
      {children}
    </div>
  );
};

Button.defaultProps = {
  className: '',
};


Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
