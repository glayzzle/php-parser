// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_shift_basic.phpt
  it("Test array_shift() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of array_shift()\n */\necho \"*** Testing array_shift() : basic functionality ***\\n\";\n$array = array('zero', 'one', '3' => 'three', 'four' => 4);\necho \"\\n-- Before shift: --\\n\";\nvar_dump($array);\necho \"\\n-- After shift: --\\n\";\necho \"Returned value:\\t\";\nvar_dump(array_shift($array));\necho \"New array:\\n\";\nvar_dump($array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
