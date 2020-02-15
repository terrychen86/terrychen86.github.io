const path = require('path');

const ROOT_PATH = path.resolve(__dirname, './src');

module.exports = {
  siteMetadata: {
    title: 'Terry Chen · Software Engineer',
    author: 'Terry Chen',
    description: "Terry Chen's Portfolio",
    url: 'https://terrychen86.github.io',
    image: '/screenshot.png',
    siteUrl: 'https://terrychen86.github.io',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, 'src/images'),
        components: path.join(__dirname, 'src/components'),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ROOT_PATH}/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${ROOT_PATH}/images`,
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
