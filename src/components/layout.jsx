import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SEO from './seo';
import Navbar from './widgets/Navbar/Navbar';
import Footer from './widgets/Footer/Footer';

const Layout = ({ children }) => (
  <>
    <SEO />
    <Helmet>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
