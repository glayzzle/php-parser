// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_basic1.phpt
  it("Test printf() function : basic functionality - string format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : basic functionality - using string format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%s\";\n$format2 = \"%s %s\";\n$format3 = \"%s %s %s\";\n$arg1 = \"arg1 argument\";\n$arg2 = \"arg2 argument\";\n$arg3 = \"arg3 argument\";\necho \"\\n-- Calling printf() with no arguments --\\n\";\n$result = printf($format);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with one arguments --\\n\";\n$result = printf($format1, $arg1);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with two arguments --\\n\";\n$result = printf($format2, $arg1, $arg2);\necho \"\\n\";\nvar_dump($result);\necho \"\\n-- Calling printf() with string three arguments --\\n\";\n$result = printf($format3, $arg1, $arg2, $arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
