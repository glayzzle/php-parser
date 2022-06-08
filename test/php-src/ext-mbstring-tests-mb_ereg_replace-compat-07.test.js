// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-07.phpt
  it("mb_ereg_replace() compat test 7", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/010.phpt) */\n  $a=\"abc122222222223\";\n  echo mb_ereg_replace(\"1(2*)3\",\"\\\\1def\\\\1\",$a);\n?>")).toMatchSnapshot();
  });
});
