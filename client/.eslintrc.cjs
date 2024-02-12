module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],'@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single', 
      { allowTemplateLiterals: true }
    ],
    'quote-props': [
      'error',
      'consistent-as-needed'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': [
      'error',
      'smart'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
  },
}
