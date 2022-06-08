// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace-compat-12.phpt
  it("mb_ereg_replace() compat test 12", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/015.phpt) */\n  echo mb_ereg_replace(\"^\",\"z\",\"abc123\");\n?>")).toMatchSnapshot();
  });
});
