/** @type {import('eslint').Linter['config']} */
const config = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'jsx-a11y', 'prettier'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off'
    },
    globals: {
      chrome: 'readonly'
    },
    ignorePatterns: ['watch.js', 'dist', 'pnpm-lock.yaml', 'node_modeules']
}

module.exports = config
