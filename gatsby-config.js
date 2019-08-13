const path = require('path');

const ROOT_PATH = path.resolve(__dirname, './src');

module.exports = {
  siteMetadata: {
    title: 'Terry Chen | Software Engineer',
    description: '',
    author: 'Terry Chen',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, 'src/images'),
        'common-ui': path.join(__dirname, 'src/components/commons/CommonUI.jsx'),
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
