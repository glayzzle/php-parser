// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic8_64bit.phpt
  it("Test sprintf() function : basic functionality - octal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using octal format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%o\";\n$format2 = \"%o %o\";\n$format3 = \"%o %o %o\";\n$arg1 = 021;\n$arg2 = -0347;\n$arg3 = 0567;\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
