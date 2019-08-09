/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withSass = require('@zeit/next-sass');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = withSass({
  cssModules: true,
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
