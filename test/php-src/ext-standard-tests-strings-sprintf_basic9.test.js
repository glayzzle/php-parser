// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic9.phpt
  it("Test sprintf() function : basic functionality - hexadecimal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using hexadecimal format ***\\n\";\n// Initialise all required variables\n// Initialising different format strings\n$format = \"format\";\n$format1 = \"%x\";\n$format2 = \"%x %x\";\n$format3 = \"%x %x %x\";\n$format11 = \"%X\";\n$format22 = \"%X %X\";\n$format33 = \"%X %X %X\";\n$arg1 = 11;\n$arg2 = 132;\n$arg3 = 177;\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\nvar_dump( sprintf($format11, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\nvar_dump( sprintf($format22, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\nvar_dump( sprintf($format33, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
