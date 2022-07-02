// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_exists_variation7.phpt
  it("Test array_key_exists() function : usage variations - position of internal array pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Check the position of the internal array pointer after calling array_key_exists()\n */\necho \"*** Testing array_key_exists() : usage variations ***\\n\";\n$input = array ('one' => 'un', 'two' => 'deux', 'three' => 'trois');\necho \"\\n-- Call array_key_exists() --\\n\";\nvar_dump($result = array_key_exists('one', $input));\necho \"\\n-- Position of Internal Pointer in Original Array: --\\n\";\necho key($input) . \" => \" . current ($input) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
