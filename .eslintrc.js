const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  ignorePatterns: [
    'coverage/*',
    'dist/*',
    'src/index.js',
    'src/reportWebVitals.js',
    'src/setupTests.js',
    'src/testHelpers/*',
  ],
  overrides: [
    {
      env: { jest: true },
      files: ['**/*.spec.js'],
      rules: {
        'react/display-name': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'import-helpers',
    'jsx-a11y',
    'react',
    'react-hooks',
    'jest',
    'sort-keys-fix',
    'better-styled-components',
  ],
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'better-styled-components/sort-declarations-alphabetically': 2,
    'import-helpers/order-imports': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        groups: ['module', '/^modules/', 'parent', ['sibling', 'index']],
        newlinesBetween: 'never',
      },
    ],
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'object-shorthand': ['warn', 'always'],
    'react/jsx-sort-default-props': ['warn'],
    'react/jsx-sort-props': ['warn'],
    'react/react-in-jsx-scope': 'off',
    'react/sort-prop-types': ['warn'],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
    react: { version: 'detect' },
  },
};
