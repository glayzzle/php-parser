// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic4.phpt
  it("Test printf() function : basic functionality - bool format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using bool format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%b\";\n$format2 = \"%b %b\";\n$format3 = \"%b %b %b\";\n$arg1 = TRUE;\n$arg2 = FALSE;\n$arg3 = true;\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments--\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments--\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments--\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
