// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_012.phpt
  it("Test pass by reference semantics", function () {
    expect(parser.parseCode("<?php\n// Simplified array_shift_variation5.phpt\n// Showing warning:\n// \"Only variables should be passed by reference in %s on line %d\"\n$stack = array ( array ( 'two' ));\nvar_dump(array_shift(array_shift($stack)));\n// This should show the identical warning\n$original = array ( array ( 'one' ));\n$stack = $original;\nvar_dump(array_shift(array_shift($stack)));\n?>")).toMatchSnapshot();
  });
});
