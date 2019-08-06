import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Navbar from './widgets/Navbar/Navbar';

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
  }

  return (
    <>
      <Helmet>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <Navbar />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
