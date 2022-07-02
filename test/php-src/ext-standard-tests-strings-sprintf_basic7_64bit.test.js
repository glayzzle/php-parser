// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic7_64bit.phpt
  it("Test sprintf() function : basic functionality - unsigned format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using unsigned format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%u\";\n$format2 = \"%u %u\";\n$format3 = \"%u %u %u\";\n$arg1 = -1111;\n$arg2 = -1234567;\n$arg3 = +2345432;\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
