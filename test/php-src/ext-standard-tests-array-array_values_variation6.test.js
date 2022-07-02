// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_values_variation6.phpt
  it("Test array_values() function : usage variations - Referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_values() when:\n * 1. Passed an array made up of referenced variables\n * 2. Passed an array by reference\n */\necho \"*** Testing array_values() : usage variations ***\\n\";\n$val1 = 'one';\n$val2 = 'two';\n$val3 = 'three';\necho \"\\n-- \\$input is an array made up of referenced variables: --\\n\";\n$input = array(&$val1, &$val2, &$val3);\nvar_dump($result1 = array_values($input));\necho \"Change \\$val2 and check result of array_values():\\n\";\n$val2 = 'deux';\nvar_dump($result1);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
