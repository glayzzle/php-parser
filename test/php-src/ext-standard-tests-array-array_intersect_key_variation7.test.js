// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_key_variation7.phpt
  it("Test array_intersect_key() function : usage variation - Passing null,unset and undefeined variable indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_key() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(0 => '0', 1 => '1' , -10 => '-10' , null => 'null');\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n$input_arrays = array(\n      'null indexed' => array(NULL => 'null 1', null => 'null 2'),\n      'undefined indexed' => array(@$undefined_var => 'undefined'),\n      'unset  indexed' => array(@$unset_var => 'unset'),\n);\nforeach($input_arrays as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( array_intersect_key($input_array, $value) );\n      var_dump( array_intersect_key($value,$input_array ) );\n}\n?>")).toMatchSnapshot();
  });
});
