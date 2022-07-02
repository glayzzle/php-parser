// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_ukey_variation6.phpt
  it("Test array_intersect_ukey() function : usage variation - Intersection of floating points with strings.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_ukey() : usage variation ***\\n\";\n//Initialize variables\n$arr_float = array(0 => 1.00, 1 => 2.00);\n$arr_string = array('0' => '1', '1' => '2', '2' => '3');\n$arr_string_float = array('0.00' => '1.00', '1.00' => '2.00');\n//Call back function\nfunction key_compare_func($key1, $key2)\n{\n    if ($key1 == $key2)\n        return 0;\n    else\n        return ($key1 > $key2)? 1:-1;\n}\necho \"\\n-- Result of floating points and strings containing integers intersection --\\n\";\nvar_dump( array_intersect_ukey($arr_float, $arr_string, 'key_compare_func') );\necho \"\\n-- Result of floating points and strings containing floating point intersection --\\n\";\nvar_dump( array_intersect_ukey($arr_float, $arr_string_float, 'key_compare_func') );\n?>")).toMatchSnapshot();
  });
});
