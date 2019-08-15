import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = React.forwardRef(({ className, ...props }, ref) => {
  const { children } = props;
  const styles = classNames('container', className);
  return (
    <div className={styles} ref={ref}>
      {children}
    </div>
  );
});

Container.defaultProps = {
  className: '',
};


Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
