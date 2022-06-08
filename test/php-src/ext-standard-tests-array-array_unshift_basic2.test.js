// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unshift_basic2.phpt
  it("Test array_unshift() function : basic functionality - associative arrays for 'array' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_unshift() by giving associative arrays for $array argument\n*/\necho \"*** Testing array_unshift() : basic functionality with associative array ***\\n\";\n// Initialise the array\n$array = array('f' => \"first\", \"s\" => 'second', 1 => \"one\", 2 => 'two');\n// Calling array_unshift() with default argument\n$temp_array = $array;\n// returns element count in the resulting array after arguments are pushed to\n// beginning of the given array\nvar_dump( array_unshift($temp_array, 10) );\n// dump the resulting array\nvar_dump($temp_array);\n// Calling array_unshift() with optional arguments\n$temp_array = $array;\n// returns element count in the resulting array after arguments are pushed to\n// beginning of the given array\nvar_dump( array_unshift($temp_array, 222, \"hello\", 12.33) );\n// dump the resulting array\nvar_dump($temp_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
