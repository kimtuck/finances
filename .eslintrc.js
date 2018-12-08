module.exports = {
  env: {
    browser: true,
    jasmine: true
  },
  plugins: ['jasmine'],
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:jasmine/recommended'],
  rules: {
    'func-names': 0,
    'linebreak-style': 0,
    'lines-around-directive': 0,
    'no-use-before-define': 0,
    'object-shorthand': 0,
    strict: 0
  },
  overrides: [
    {
      files: ['*_spec.js'],
      rules: {
        'prefer-arrow-callback': 0
      }
    }
  ],
  globals: {
    angular: true,
    inject: true,
    module: true,
    $: true
  }
};
