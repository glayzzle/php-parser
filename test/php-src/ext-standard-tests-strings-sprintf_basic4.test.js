// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_basic4.phpt
  it("Test sprintf() function : basic functionality - bool format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : basic functionality - using bool format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%b\";\n$format2 = \"%b %b\";\n$format3 = \"%b %b %b\";\n$arg1 = TRUE;\n$arg2 = FALSE;\n$arg3 = true;\n// Calling sprintf() with default arguments\nvar_dump( sprintf($format) );\n// Calling sprintf() with two arguments\nvar_dump( sprintf($format1, $arg1) );\n// Calling sprintf() with three arguments\nvar_dump( sprintf($format2, $arg1, $arg2) );\n// Calling sprintf() with four arguments\nvar_dump( sprintf($format3, $arg1, $arg2, $arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
