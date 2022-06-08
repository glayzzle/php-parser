// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic8.phpt
  it("Test printf() function : basic functionality - octal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using octal format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%o\";\n$format2 = \"%o %o\";\n$format3 = \"%o %o %o\";\n$arg1 = 021;\n$arg2 = -0347;\n$arg3 = 0567;\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments --\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments --\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments --\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
