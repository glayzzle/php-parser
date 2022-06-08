// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_basic.phpt
  it("Test array_slice() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of array_slice()\n */\necho \"*** Testing array_slice() : basic functionality ***\\n\";\n$input = array('one' => 1, 'two' => 2, 3, 23 => 4);\n$offset = 2;\n$length = 2;\n$preserve_keys = true;\n// Calling array_slice() with all possible arguments\necho \"\\n-- All arguments --\\n\";\nvar_dump( array_slice($input, $offset, $length, $preserve_keys) );\n// Calling array_slice() with mandatory arguments\necho \"\\n-- Mandatory arguments --\\n\";\nvar_dump( array_slice($input, $offset) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
