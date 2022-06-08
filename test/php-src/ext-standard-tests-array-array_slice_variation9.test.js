// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation9.phpt
  it("Test array_slice() function : usage variations - referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_slice() when:\n * 1. Passed an array of referenced variables\n * 2. $input argument is passed by reference\n */\necho \"*** Testing array_slice() : usage variations ***\\n\";\n$val1 = 'one';\n$val2 = 'two';\n$val3 = 'three';\necho \"\\n-- Array of referenced variables (\\$preserve_keys = default) --\\n\";\n$input = array(3 => &$val1, 2 => &$val2, 1 => &$val3);\nvar_dump(array_slice($input, 1, 2));\necho \"-- Change \\$val2 (\\$preserve_keys = TRUE) --\\n\";\n$val2 = 'hello, world';\nvar_dump(array_slice($input, 1, 2, true));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
