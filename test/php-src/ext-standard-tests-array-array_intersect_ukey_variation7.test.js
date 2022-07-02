// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_ukey_variation7.phpt
  it("Test array_intersect_ukey() function : usage variation - Intersection of strings containing integer and float", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_ukey() : usage variation ***\\n\";\n//Initialize variables\n$arr1_string_int = array('0' => '1', '1' => '2');\n$arr2_string_int = array('0' => '1', '1' => '3');\n$arr1_string_float = array('0.00' => '1.00', '1.00' => '2.00');\n$arr2_string_float = array('0.00' => '1.00', '1.00' => '3.00');\n//Call back function\nfunction key_compare_func($key1, $key2)\n{\n    if ($key1 == $key2)\n        return 0;\n    else\n        return ($key1 > $key2)? 1:-1;\n}\necho \"\\n-- Result of strings containing integers intersection --\\n\";\nvar_dump( array_intersect_ukey($arr1_string_int, $arr2_string_int, 'key_compare_func') );\necho \"\\n-- Result of strings containing floating points intersection --\\n\";\nvar_dump( array_intersect_ukey($arr1_string_float, $arr2_string_float, 'key_compare_func') );\necho \"\\n-- Result of strings containing integers and strings containing floating points intersection --\\n\";\nvar_dump( array_intersect_ukey($arr1_string_int, $arr2_string_float, 'key_compare_func') );\n?>")).toMatchSnapshot();
  });
});
