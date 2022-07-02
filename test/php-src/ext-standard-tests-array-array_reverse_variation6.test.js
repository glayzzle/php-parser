// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_reverse_variation6.phpt
  it("Test array_reverse() function : usage variations - two dimensional arrays for 'array' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * testing the functionality of array_reverse() by giving 2-D arrays for $array argument\n*/\necho \"*** Testing array_reverse() : usage variations ***\\n\";\n// Initializing the 2-d arrays\n$two_dimensional_array = array(\n  // associative array\n  array('color' => 'red', 'item' => 'pen', 'place' => 'LA'),\n   // numeric array\n   array(1, 2, 3, 4, 5),\n   // combination of numeric and associative arrays\n   array('a' => 'green', 'red', 'brown', 33, 88, 'orange', 'item' => 'ball')\n);\n// calling array_reverse() with various types of 2-d arrays\n// with default arguments\necho \"-- with default argument --\\n\";\nvar_dump( array_reverse($two_dimensional_array) );  // whole array\nvar_dump( array_reverse($two_dimensional_array[1]) );  // sub array\n// with $preserve_keys argument\necho \"-- with all possible arguments --\\n\";\n// whole array\nvar_dump( array_reverse($two_dimensional_array, true) );\nvar_dump( array_reverse($two_dimensional_array, false) );\n// sub array\nvar_dump( array_reverse($two_dimensional_array[1], true) );\nvar_dump( array_reverse($two_dimensional_array[1], false) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
