module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['babel-plugin-styled-components', {
      "ssr": true
    }],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '',
      },
    ],
  ],
  env: {
    // For React Native
    production: {
      plugins: ['babel-plugin-root-import'],
    },
  },
};
