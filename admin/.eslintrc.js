'use strict';

const eslintrc = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'babel',
  ],
  rules: {
    'new-cap': ["error", { "capIsNew": false }],
    'arrow-body-style': 0,
    'react/no-danger': 0,
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/no-multi-comp': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-first-prop-new-line': 0,
    "react/jsx-filename-extension": [1, { extensions: ['.js'] }],
    'import/no-dynamic-require': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'consistent-return': 0,
    'no-redeclare': 0,
    'semi': [2, "never"],
  }
};

module.exports = eslintrc;