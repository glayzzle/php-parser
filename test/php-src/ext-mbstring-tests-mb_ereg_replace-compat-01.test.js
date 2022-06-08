// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-01.phpt
  it("mb_ereg_replace() compat test 1", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/001.phpt) */\n  $a=\"abc123\";\n  echo mb_ereg_replace(\"123\",\"def\",$a);\n?>")).toMatchSnapshot();
  });
});
