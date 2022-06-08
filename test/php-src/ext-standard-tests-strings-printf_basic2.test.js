// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic2.phpt
  it("Test printf() function : basic functionality - integer format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using integer format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%d\";\n$format2 = \"%d %d\";\n$format3 = \"%d %d %d\";\n$arg1 = 111;\n$arg2 = 222;\n$arg3 = 333;\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments--\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments--\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with three arguments--\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
