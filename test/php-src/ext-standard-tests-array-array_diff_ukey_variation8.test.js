// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_ukey_variation8.phpt
  it("Test array_diff_ukey() function : usage variation - Passing boolean indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_ukey() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(0 => '0', 1 => '1', -10 => '-10', 'true' => 1, 'false' => 0);\n$boolean_indx_array = array(true => 'boolt', false => 'boolf', TRUE => 'boolT', FALSE => 'boolF');\nfunction key_compare_func($key1, $key2)\n{\n  return strcasecmp($key1, $key2);\n}\necho \"\\n-- Testing array_diff_ukey() function with boolean indexed array --\\n\";\nvar_dump( array_diff_ukey($boolean_indx_array, $input_array, 'key_compare_func') );\nvar_dump( array_diff_ukey($input_array, $boolean_indx_array, 'key_compare_func') );\n?>")).toMatchSnapshot();
  });
});
