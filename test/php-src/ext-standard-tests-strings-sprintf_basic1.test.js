// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic1.phpt
  it("Test sprintf() function : basic functionality - string format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using string format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%s\";\n$format2 = \"%s %s\";\n$format3 = \"%s %s %s\";\n$arg1 = \"arg1 argument\";\n$arg2 = \"arg2 argument\";\n$arg3 = \"arg3 argument\";\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
