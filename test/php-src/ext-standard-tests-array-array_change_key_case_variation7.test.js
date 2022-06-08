// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_change_key_case_variation7.phpt
  it("Test array_change_key_case() function : usage variations - referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_change_key_case() when:\n * 1. Passed a referenced variable\n * 2. Passed an argument by reference\n */\necho \"*** Testing array_change_key_case() : usage variations ***\\n\";\n$input = array('one' => 1, 'two' => 2, 'ABC' => 'xyz');\necho \"\\n-- \\$input argument is a reference to array --\\n\";\n$new_input = &$input;\necho \"Result:\\n\";\nvar_dump(array_change_key_case($new_input, CASE_UPPER));\necho \"Original:\\n\";\nvar_dump($input);\necho \"Referenced:\\n\";\nvar_dump($new_input);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
