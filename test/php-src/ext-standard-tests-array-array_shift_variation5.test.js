// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_shift_variation5.phpt
  it("Test array_shift() function : usage variations - call recursively", function () {
    expect(parser.parseCode("<?php\n/*\n * Use the result of one call to array_shift\n * as the $stack argument of another call to array_shift()\n * When done in one statement causes strict error messages.\n */\necho \"*** Testing array_shift() : usage variations ***\\n\";\n$stack = array ( array ( array ('zero', 'one', 'two'), 'un', 'deux'), 'eins', 'zwei');\n// not following strict standards\necho \"\\n-- Incorrect Method: --\\n\";\nvar_dump(array_shift(array_shift(array_shift($stack))));\n$stack = array (array( array('zero', 'one', 'two'), 'un', 'deux'), 'eins', 'zwei');\n// correct way of doing above:\necho \"\\n-- Correct Method: --\\n\";\n$result1 = array_shift($stack);\n$result2 = array_shift($result1);\nvar_dump(array_shift($result2));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
