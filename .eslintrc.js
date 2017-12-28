module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "prettier"],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
