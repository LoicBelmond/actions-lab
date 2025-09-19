const js = require('@eslint/js')

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs'
    },
    env: {
      node: true,
      jest: true
    },
    ignores: ['node_modules/', 'dist/', 'coverage/'],
    rules: {
      // add custom rules here if your course requires any
    }
  }
]