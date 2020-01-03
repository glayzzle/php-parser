module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:jest/recommended"],
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
  },
  overrides: [
    {
      files: ["test/**/*.js"],
      rules: {
        "no-console": "off"
      }
    }
  ]
};
