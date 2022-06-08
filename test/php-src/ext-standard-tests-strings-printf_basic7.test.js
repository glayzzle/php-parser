// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic7.phpt
  it("Test printf() function : basic functionality - unsigned format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using unsigned format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%u\";\n$format2 = \"%u %u\";\n$format3 = \"%u %u %u\";\n$arg1 = -1111;\n$arg2 = -1234567;\n$arg3 = +2345432;\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments --\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments --\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments --\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
