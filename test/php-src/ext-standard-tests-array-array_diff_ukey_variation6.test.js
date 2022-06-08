// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_ukey_variation6.phpt
  it("Test array_diff_ukey() function : usage variation - Passing integer indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_ukey() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(-07 => '-07', 0xA => '0xA');\n$input_arrays = array(\n      'decimal indexed' => array(10 => '10', '-17' => '-17'),\n      'octal indexed' => array(-011 => '-011', 012 => '012'),\n      'hexa  indexed' => array(0x12 => '0x12', -0x7 => '-0x7', ),\n);\nfunction key_compare_func($key1, $key2)\n{\n  return strcasecmp($key1, $key2);\n}\nforeach($input_arrays as $key =>$value) {\n      echo \"\\n--$key--\\n\";\n      var_dump( array_diff_ukey($value, $input_array, 'key_compare_func') );\n      var_dump( array_diff_ukey($input_array, $value, 'key_compare_func') );\n}\n?>")).toMatchSnapshot();
  });
});
