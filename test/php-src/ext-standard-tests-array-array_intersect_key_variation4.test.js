// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_key_variation4.phpt
  it("Test array_intersect_key() function : usage variation - Passing integer indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_key() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(0 => '0', -1 => '-1' , 02 => 'two', -07 => '-07', 0xA => '0xA', -0xC => '-0xc');\n$input_arrays = array(\n      'decimal indexed' => array(10 => '10', '-17' => '-17'),\n      'octal indexed' => array(-011 => '-011', 012 => '012'),\n      'hexa  indexed' => array(0x12 => '0x12', -0x7 => '-0x7', ),\n);\nforeach($input_arrays as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( array_intersect_key($input_array, $value) );\n      var_dump( array_intersect_key($value,$input_array ) );\n}\n?>")).toMatchSnapshot();
  });
});
