module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: { jest: true },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
  globals: {
    fetch: false
  }
};
