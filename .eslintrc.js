module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Make sure eslint picks up the config at the root of the directory
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.d.ts'],
      },
    },
  },
  env: {
    node: true,
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'eslint-comments/no-unused-disable': 0,
  },
};
