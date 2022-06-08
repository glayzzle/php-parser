// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic5.phpt
  it("Test sprintf() function : basic functionality - char format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using char format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%c\";\n$format2 = \"%c %c\";\n$format3 = \"%c %c %c\";\n$arg1 = 65;\n$arg2 = 66;\n$arg3 = 67;\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
