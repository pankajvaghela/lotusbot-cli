module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    "import/recommended"
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
    "import/extensions": [2, "ignorePackages"]
  },
};
