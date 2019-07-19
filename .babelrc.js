module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '',
      },
    ],
  ],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
  env: {
    // For React Native
    production: {
      plugins: ['babel-plugin-root-import'],
    },
  },
};
