// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic9.phpt
  it("Test printf() function : basic functionality - hexadecimal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using hexadecimal format ***\\n\";\n// Initialise all required variables\n// Initialising different format strings\n$format = \"format\";\n$format1 = \"%x\";\n$format2 = \"%x %x\";\n$format3 = \"%x %x %x\";\n$format11 = \"%X\";\n$format22 = \"%X %X\";\n$format33 = \"%X %X %X\";\n$arg1 = 11;\n$arg2 = 132;\n$arg3 = 177;\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments --\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\n$result = printf($format11, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments --\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\n$result = printf($format22, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments --\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n$result = printf($format33, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
