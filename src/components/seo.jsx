import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  const siteData = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description: description
          url
          image
        }
      }
    }
  `);

  const { siteMetadata } = siteData.site;
  return (
    <>
      <Helmet title={siteMetadata.title}>
        <html lang="en" />
        <meta name="description" content={siteMetadata.description} />
        <meta name="image" content={siteMetadata.image} />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={siteMetadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.image} />
      </Helmet>
    </>
  );
};

export default SEO;
