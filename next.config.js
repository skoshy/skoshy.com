/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withSass = require('@zeit/next-sass');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = phase => {
  const ENV = phase === PHASE_DEVELOPMENT_SERVER ? 'development' : 'production'; // when `next build` or `npm run build` is used

  return withSass({
    env: {
      ENV,
      SITE_TITLE: 'Stefan Koshy',
    },
    cssModules: true,
    webpack(config) {
      config.resolve.modules.push(path.resolve('./'));
      return config;
    },
  });
};
