const js = require('@eslint/js');
const ts = require('typescript-eslint');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'coverage'],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },
];
