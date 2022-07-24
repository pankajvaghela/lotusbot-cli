module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  settings: {
    'import/resolver': {
      node: {
        map: [['@src', './src']],
      },
    },
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
};
