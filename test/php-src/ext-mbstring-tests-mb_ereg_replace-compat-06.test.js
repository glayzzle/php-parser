// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-06.phpt
  it("mb_ereg_replace() compat test 6", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/008.phpt) */\n  echo mb_ereg_replace(\"([a-z]*)([-=+|]*)([0-9]+)\",\"\\\\3 \\\\1 \\\\2\\n\",\"abc+-|=123\");\n?>")).toMatchSnapshot();
  });
});
