module.exports = {
  ignorePatterns: ['.nuxt/**/*', 'docs/**/*', 'src/assets/vendor/**/*'],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'max-len': 'off',
    'prettier/prettier': 'warn',

    'vue/require-default-prop': 'off',
  },
};
