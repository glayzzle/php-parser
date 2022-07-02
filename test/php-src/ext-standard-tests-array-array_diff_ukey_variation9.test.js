// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_ukey_variation9.phpt
  it("Test array_diff_ukey() function : usage variation - Passing null,unset and undefined variable indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_ukey() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(10 => '10', \"\" => 'empty');\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n$input_arrays = array(\n      'null indexed' => array(NULL => 'null 1', null => 'null 2'),\n      'undefined indexed' => array(@$undefined_var => 'undefined'),\n      'unset  indexed' => array(@$unset_var => 'unset'),\n);\nforeach($input_arrays as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( array_diff_ukey($value, $input_array, 'strcasecmp') );\n      var_dump( array_diff_ukey($input_array, $value, 'strcasecmp') );\n}\n?>")).toMatchSnapshot();
  });
});
