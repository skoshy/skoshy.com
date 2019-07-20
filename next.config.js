const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
};
