const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        images: path.resolve(__dirname, 'src/images'),
        'common-ui': path.join(__dirname, 'src/components/commons/CommonUI.jsx'),
      },
    },
  });
};
