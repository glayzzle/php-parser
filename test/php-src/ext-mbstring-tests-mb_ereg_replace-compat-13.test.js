// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-13.phpt
  it("mb_ereg_replace() compat test 13", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/016.phpt) */\n  echo mb_ereg_replace('\\?',\"abc\",\"?123?\");\n?>")).toMatchSnapshot();
  });
});
