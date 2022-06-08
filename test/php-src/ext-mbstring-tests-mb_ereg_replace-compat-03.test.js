// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-03.phpt
  it("mb_ereg_replace() compat test 3", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/003.phpt) */\n  $a=\"\\\\'test\";\n  echo mb_ereg_replace(\"\\\\\\\\'\",\"'\",$a);\n?>")).toMatchSnapshot();
  });
});
