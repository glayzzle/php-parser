// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_values_variation7.phpt
  it("Test array_values() function : usage variations - Internal order check", function () {
    expect(parser.parseCode("<?php\n/*\n * Check that array_values is re-assigning keys according to the internal order of the array,\n * and is not dependent on the \\$input argument's keys\n */\necho \"*** Testing array_values() : usage variations ***\\n\";\n// populate array with 'default' keys in reverse order\n$input = array(3 => 'three', 2 => 'two', 1 => 'one', 0 => 'zero');\necho \"\\n-- \\$input argument: --\\n\";\nvar_dump($input);\necho \"\\n-- Result of array_values() --\\n\";\nvar_dump(array_values($input));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
