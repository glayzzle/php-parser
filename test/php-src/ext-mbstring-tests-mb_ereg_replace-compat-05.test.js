// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-05.phpt
  it("mb_ereg_replace() compat test 5", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/007.phpt) */\n  $a=\"abcd\";\n  $b=mb_ereg_replace(\"abcd\",\"\",$a);\n  echo \"strlen(\\$b)=\".strlen($b);\n?>")).toMatchSnapshot();
  });
});
