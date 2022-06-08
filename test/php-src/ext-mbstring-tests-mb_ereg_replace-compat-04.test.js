// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-04.phpt
  it("mb_ereg_replace() compat test 4", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/006.phpt) */\n  $a=\"This is a nice and simple string\";\n  echo mb_ereg_replace(\"^This\",\"That\",$a);\n?>")).toMatchSnapshot();
  });
});
