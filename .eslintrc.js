module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { 'props': false }],
    'no-use-before-define': 0,
    'semi': [2, 'always'],
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
      ],
      env: {
        jest: true,
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      'jsx': true,
    },
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'react',
  ]
};
