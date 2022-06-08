// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-11.phpt
  it("mb_ereg_replace() compat test 11", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/014.phpt) */\n  $a=\"a\\\\2bxc\";\n  echo mb_ereg_replace(\"a(.*)b(.*)c\",\"\\\\1\",$a);\n?>")).toMatchSnapshot();
  });
});
