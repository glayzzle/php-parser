// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_shift_variation7.phpt
  it("Test array_shift() function : usage variations - position of internal pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Test that the internal pointer is reset after calling array_shift()\n */\necho \"*** Testing array_shift() : usage variations ***\\n\";\n$stack = array ('one' => 'un', 'two' => 'deux');\necho \"\\n-- Call array_shift() --\\n\";\nvar_dump($result = array_shift($stack));\necho \"\\n-- Position of Internal Pointer in Passed Array: --\\n\";\necho key($stack) . \" => \" . current ($stack) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
