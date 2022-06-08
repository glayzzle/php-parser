// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic3.phpt
  it("Test sprintf() function : basic functionality - float format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using float format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%f\";\n$format2 = \"%f %f\";\n$format3 = \"%f %f %f\";\n$format11 = \"%F\";\n$format22 = \"%F %F\";\n$format33 = \"%F %F %F\";\n$arg1 = 11.11;\n$arg2 = 22.22;\n$arg3 = 33.33;\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\nvar_dump( sprintf($format11, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\nvar_dump( sprintf($format22, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\nvar_dump( sprintf($format33, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
