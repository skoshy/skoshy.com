module.exports = {
  plugins: ['stylelint-order'],
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        ignoreFiles: ['**/*.{css,scss}'],
      },
    ],
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};
