// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation8.phpt
  it("Test array_slice() function : usage variations - multidimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_slice when passed\n * 1. a two-dimensional array as $input argument\n * 2. a sub-array as $input argument\n */\necho \"*** Testing array_slice() : usage variations ***\\n\";\n$input = array ('zero', 'one', array('zero', 'un', 'deux'), 9 => 'nine');\necho \"\\n-- Slice a two-dimensional array --\\n\";\nvar_dump(array_slice($input, 1, 3));\necho \"\\n-- \\$input is a sub-array --\\n\";\nvar_dump(array_slice($input[2], 1, 2));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
