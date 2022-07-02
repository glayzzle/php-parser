// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_change_key_case_variation5.phpt
  it("Test array_change_key_case() function : usage variations - position of internal pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Check the position of the internal array pointer after calling the function\n */\necho \"*** Testing array_change_key_case() : usage variations ***\\n\";\n$input = array ('one' => 'un', 'two' => 'deux', 'three' => 'trois');\necho \"\\n-- Call array_change_key_case() --\\n\";\nvar_dump($result = array_change_key_case($input, CASE_UPPER));\necho \"-- Position of Internal Pointer in Result: --\\n\";\necho key($result) . \" => \" . current($result) . \"\\n\";\necho \"\\n-- Position of Internal Pointer in Original Array: --\\n\";\necho key($input) . \" => \" . current ($input) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
