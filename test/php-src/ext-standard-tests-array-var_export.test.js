// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/var_export.phpt
  it("var_export() and objects with numeric indexes properties", function () {
    expect(parser.parseCode("<?php\n$a = (object) array (1, 3, \"foo\" => \"bar\");\nvar_export($a);\n?>")).toMatchSnapshot();
  });
});
