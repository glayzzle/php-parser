// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug37262.phpt
  it("Bug #37262 (var_export() does not escape \\0 character)", function () {
    expect(parser.parseCode("<?php\nvar_export(\"foo\\0bar\");\n?>")).toMatchSnapshot();
  });
});
