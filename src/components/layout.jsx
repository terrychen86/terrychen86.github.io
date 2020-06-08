// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet';
import Footer from 'components/Footer';
import SEO from 'components/seo';

import Navbar from 'components/Navbar/Navbar';
import '../sass/styles.scss';

type Props = {|
  +children: React.Node,
|};

const Layout = ({ children }: Props) => (
  <>
    <SEO />
    <Helmet>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
