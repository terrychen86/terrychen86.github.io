import React from 'react';
import { Container } from 'common-ui';
import './Footer.scss';

const Footer = () => (
  <section className="footer">
    <Container className="footer-container">
      <p className="footer-text">
        Copyright (c) 2019 &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        Website Designed and Built by&nbsp;
        <strong>Terry Chen</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp; All right reserved.
      </p>
    </Container>
  </section>
);

export default Footer;
