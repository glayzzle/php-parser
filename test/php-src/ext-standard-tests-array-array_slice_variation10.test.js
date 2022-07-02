// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation10.phpt
  it("Test array_slice() function : usage variations - position of internal array pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Check position of internal array pointer after calling array_slice()\n */\necho \"*** Testing array_slice() : usage variations ***\\n\";\n$input = array ('one' => 'un', 'two' => 'deux', 23 => 'twenty-three', 'zero');\necho \"\\n-- Call array_slice() --\\n\";\nvar_dump($result = array_slice($input, 2));\necho \"-- Position of Internal Pointer in Result: --\\n\";\necho key($result) . \" => \" . current($result) . \"\\n\";\necho \"\\n-- Position of Internal Pointer in Original Array: --\\n\";\necho key($input) . \" => \" . current ($input) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
