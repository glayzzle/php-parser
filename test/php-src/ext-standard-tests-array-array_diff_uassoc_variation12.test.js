// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_variation12.phpt
  it("Test array_diff_uassoc() function : usage variation - Passing null,unset and undefined variable indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_uassoc() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(10 => '10', \"\" => '');\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n$input_arrays = array(\n      'null indexed' => array(NULL => NULL, null => null),\n      'undefined indexed' => array(@$undefined_var => @$undefined_var),\n      'unset indexed' => array(@$unset_var => @$unset_var),\n);\nforeach($input_arrays as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( array_diff_uassoc($input_array, $value, \"strcasecmp\") );\n      var_dump( array_diff_uassoc($value, $input_array, \"strcasecmp\") );\n}\n?>")).toMatchSnapshot();
  });
});
