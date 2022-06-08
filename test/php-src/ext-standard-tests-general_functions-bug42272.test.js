// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug42272.phpt
  it("Bug #42272 (var_export() incorrectly escapes char(0))", function () {
    expect(parser.parseCode("<?php\n$foo = var_export(\"\\0\", true );\necho $foo, \"\\n\";\nvar_export(\"a\\0b\");\n?>")).toMatchSnapshot();
  });
});
