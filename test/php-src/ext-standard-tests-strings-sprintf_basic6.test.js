// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic6.phpt
  it("Test sprintf() function : basic functionality - exponential format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using exponential format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%e\";\n$format2 = \"%E %e\";\n$format3 = \"%e %E %e\";\n$arg1 = 1000;\n$arg2 = 2e3;\n$arg3 = +3e3;\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
