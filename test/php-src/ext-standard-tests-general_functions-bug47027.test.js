// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug47027.phpt
  it("Bug #47027 (var_export doesn't show numeric indices on ArrayObject)", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject(array (2 => \"foo\", \"bar\" => \"baz\"));\nvar_export ($ao);\n?>")).toMatchSnapshot();
  });
});
