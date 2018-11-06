module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true
  },
  rules: {
    "prefer-const": "error",
    "no-var": "error",
    "prettier/prettier": "error"
  }
};
