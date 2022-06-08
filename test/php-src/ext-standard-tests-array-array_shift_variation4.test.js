// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_shift_variation4.phpt
  it("Test array_shift() function : usage variations - multi-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test popping elements from a sub-array and popping an array from an array\n */\necho \"*** Testing array_shift() : usage variations ***\\n\";\n$stack_first = array(array(1, 2, 3), 'one', 'two');\n$stack_last = array ('zero', 'one', array (1, 2, 3));\necho \"\\n-- Before shift: --\\n\";\necho \"---- \\$stack_first:\\n\";\nvar_dump($stack_first);\necho \"---- \\$stack_last:\\n\";\nvar_dump($stack_last);\necho \"\\n-- After shift: --\\n\";\necho \"---- Pop array from array:\\n\";\necho \"Returned value:\\t\";\nvar_dump(array_shift($stack_first));\necho \"New array:\\n\";\nvar_dump($stack_first);\necho \"---- Pop element from array within array:\\n\";\necho \"Returned value:\\t\";\nvar_dump(array_shift($stack_last[2]));\necho \"New array:\\n\";\nvar_dump($stack_last);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
