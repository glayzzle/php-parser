// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_variation9.phpt
  it("Test array_diff_uassoc() function : usage variation - Passing integer indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_uassoc() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(10 => 10, 12 => 12);\n$input_arrays = array(\n      'decimal indexed' => array(10 => 10, -17 => -17),\n      'octal indexed' => array( 012 => 10, -011 => -011,),\n      'hexa  indexed' => array(0xA => 10, -0x7 => -0x7 ),\n);\nforeach($input_arrays as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( array_diff_uassoc($input_array, $value, \"strcasecmp\") );\n      var_dump( array_diff_uassoc($value, $input_array, \"strcasecmp\") );\n}\n?>")).toMatchSnapshot();
  });
});
