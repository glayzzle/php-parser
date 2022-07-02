// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_values_basic.phpt
  it("Test array_values() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of array_values()\n */\necho \"*** Testing array_values() : basic functionality ***\\n\";\n// Initialise all required variables\n$input = array('zero', 'one', 'two', 'three' => 3, 10 => 'ten');\n// Calling array_values() with all possible arguments\nvar_dump( array_values($input) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
