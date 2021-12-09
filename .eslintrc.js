module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowTypedFunctionExpressions: true,
        allowExpressions: true,
      },
    ],
    'id-match': ['error', '([A-Z][a-z][0-9]_$)*'], // can help prevent unicode var attacks - https://portswigger.net/daily-swig/smuggling-hidden-backdoors-into-javascript-with-homoglyphs-and-invisible-unicode-characters
    'react/prop-types': 0,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['FunctionComponent'],
            message: "Please import 'FC' from 'src/utils/types' instead.",
          },
          {
            name: 'prop-types',
            importNames: ['InferProps'],
            message:
              "Please import 'InferPropTypes' from 'src/utils/types' instead.",
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      'babel-plugin-root-import': {},
      node: {
        paths: ['./'],
      },
    },
  },
};
