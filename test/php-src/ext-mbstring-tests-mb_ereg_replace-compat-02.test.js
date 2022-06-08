// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-02.phpt
  it("mb_ereg_replace() compat test 2", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/002.phpt) */\n  $a=\"abc123\";\n  echo mb_ereg_replace(\"123\",\"\",$a);\n?>")).toMatchSnapshot();
  });
});
