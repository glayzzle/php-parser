// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_ukey_variation5.phpt
  it("Test array_diff_ukey() function : usage variation - Passing multi-dimensional array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_ukey() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$array1 = array(\n      'first' => array('blue' => 1, 'red' => 2),\n      'second' => array('yellow' => 7),\n      'third' => array(0 => 'zero'),\n);\n$array2 = array (\n      'first' => array('blue' => 1, 'red' => 2,),\n      'second' => array('cyan' => 8),\n      'fourth' => array(2 => 'two'),\n);\necho \"\\n-- Testing array_diff_ukey() function with multi dimensional array --\\n\";\nvar_dump( array_diff_ukey($array1, $array2, 'strcasecmp') );\nvar_dump( array_diff_ukey($array2, $array1, 'strcasecmp') );\n?>")).toMatchSnapshot();
  });
});
