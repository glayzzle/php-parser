// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic5.phpt
  it("Test printf() function : basic functionality - char format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using char format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%c\";\n$format2 = \"%c %c\";\n$format3 = \"%c %c %c\";\n$arg1 = 65;\n$arg2 = 66;\n$arg3 = 67;\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments --\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments --\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments --\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
