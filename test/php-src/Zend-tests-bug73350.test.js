// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73350.phpt
  it("Bug #73350 (Exception::__toString() cause circular references)", function () {
    expect(parser.parseCode("<?php\n$e = new Exception();\n// This line cause problem :(\n// Comment it to see the difference.\n(string) $e;\n// This line show the clue (PHP Warning: ...).\nvar_export($e);\n?>")).toMatchSnapshot();
  });
});
