// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_uassoc_variation5.phpt
  it("Test array_intersect_uassoc() function : usage variation - Intersection of integers with floats and strings.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_uassoc() : usage variation ***\\n\";\n//Initialize variables\n$arr_default_int = array(1, 2 );\n$arr_float = array(0 => 1.00, 1 => 2.00, 2 => 3.00);\n$arr_string = array('1', '2', '3');\n$arr_string_float = array('1.00', '2.00');\nfunction key_compare_func($a, $b)\n{\n    if ($a === $b) {\n        return 0;\n    }\n    return ($a > $b)? 1:-1;\n}\necho \"\\n-- Result of integers and floating point intersection --\\n\";\nvar_dump( array_intersect_uassoc($arr_default_int, $arr_float, \"key_compare_func\") );\necho \"\\n-- Result of integers and strings containing integers intersection --\\n\";\nvar_dump( array_intersect_uassoc($arr_default_int, $arr_string, \"key_compare_func\") );\necho \"\\n-- Result of integers and strings containing floating points intersection --\\n\";\nvar_dump( array_intersect_uassoc($arr_default_int, $arr_string_float, \"key_compare_func\") );\n?>")).toMatchSnapshot();
  });
});
