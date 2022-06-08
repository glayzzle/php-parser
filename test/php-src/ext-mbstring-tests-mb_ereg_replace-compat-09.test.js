// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-09.phpt
  it("mb_ereg_replace() compat test 9", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/012.phpt) */\n  $a=\"abc123\";\n  echo mb_ereg_replace(\"123\",'def\\1ghi',$a);\n?>")).toMatchSnapshot();
  });
});
