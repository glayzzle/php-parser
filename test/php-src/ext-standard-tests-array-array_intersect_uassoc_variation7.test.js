// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_uassoc_variation7.phpt
  it("Test array_intersect_uassoc() function : usage variation - Intersection of strings containing integers, float", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_uassoc() : usage variation ***\\n\";\n//Initialize variables\n$arr1_string_int = array('1', '2');\n$arr2_string_int = array('1', '3');\n$arr1_string_float = array('1.00', '2.00');\n$arr2_string_float = array('1.00', '3.00');\nfunction key_compare_func($a, $b)\n{\n    if ($a === $b) {\n        return 0;\n    }\n    return ($a > $b)? 1:-1;\n}\necho \"\\n-- Result of strings containing integers intersection --\\n\";\nvar_dump( array_intersect_uassoc($arr1_string_int, $arr2_string_int, \"key_compare_func\") );\necho \"\\n-- Result of strings containing floating points intersection --\\n\";\nvar_dump( array_intersect_uassoc($arr1_string_float, $arr2_string_float, \"key_compare_func\") );\necho \"\\n-- Result of strings containing integers and strings containing floating points intersection --\\n\";\nvar_dump( array_intersect_uassoc($arr1_string_int, $arr2_string_float, \"key_compare_func\") );\n?>")).toMatchSnapshot();
  });
});
