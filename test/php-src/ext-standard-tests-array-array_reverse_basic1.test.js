// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_reverse_basic1.phpt
  it("Test array_reverse() function : basic functionality - simple array for 'array' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_reverse() by giving a simple array for $array argument\n*/\necho \"*** Testing array_reverse() : basic functionality ***\\n\";\n// Initialise the array\n$array = array(\"a\", \"green\", \"red\", 'blue', 10, 13.33);\n// Calling array_reverse() with default arguments\nvar_dump( array_reverse($array) );\n// Calling array_reverse() with all possible arguments\nvar_dump( array_reverse($array, true) );  // expects the keys to be preserved\nvar_dump( array_reverse($array, false) );  // expects the keys not to be preserved\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
