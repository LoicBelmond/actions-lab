// eslint.config.cjs
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    ignores: ['node_modules/', 'dist/', 'coverage/'],
    rules: {
      // add custom rules here if needed
    },
  },
];
