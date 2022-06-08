// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_key_variation8.phpt
  it("Test array_diff_key() function : usage variation - Passing multi-dimensional array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_key() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$array1 = array(\n      'first' => array('blue' => 1, 'red' => 2),\n      'second' => array('yellow' => 7),\n      'third' => array(0 => 'zero'),\n);\n$array2 = array (\n      'first' => array('blue' => 1, 'red' => 2,),\n      'second' => array('cyan' => 8),\n      'fourth' => array(2 => 'two'),\n);\necho \"\\n-- Testing array_diff_key() function with multi dimensional array --\\n\";\nvar_dump( array_diff_key($array1, $array2) );\nvar_dump( array_diff_key($array2, $array1) );\n?>")).toMatchSnapshot();
  });
});
