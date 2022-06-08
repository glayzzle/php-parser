// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic3.phpt
  it("Test printf() function : basic functionality - float format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using float format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%f\";\n$format2 = \"%f %f\";\n$format3 = \"%f %f %f\";\n$format11 = \"%F\";\n$format22 = \"%F %F\";\n$format33 = \"%F %F %F\";\n$arg1 = 11.11;\n$arg2 = 22.22;\n$arg3 = 33.33;\necho \"\\n-- Calling printf() with no arguments--\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments--\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\n$result = printf($format11, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments--\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\n$result = printf($format22, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments--\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n$result = printf($format33, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
