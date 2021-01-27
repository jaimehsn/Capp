module.exports = {
  root: true,
  parser: "@babel/eslint-parser",                 // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: "./babel.config.js",
    },
  },
  settings: {
      react: {
          version: 'detect'   // Automatically detect the react version
      }
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }]  // Use our .prettierrc file as source
  }
};