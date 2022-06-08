// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic6.phpt
  it("Test printf() function : basic functionality - exponential format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using exponential format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%e\";\n$format2 = \"%E %e\";\n$format3 = \"%e %E %e\";\n$arg1 = 1000;\n$arg2 = 2e3;\n$arg3 = +3e3;\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one argument --\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments --\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments --\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
