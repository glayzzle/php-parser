// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_variation6.phpt
  it("Test array_diff_uassoc() function : usage variation - Comparing floating points with strings having integers and float", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_uassoc() : usage variation ***\\n\";\n//Initialize variables\n$arr_float = array(0 => 1.00, 1 => 2.00);\n$arr_string_int = array('1', '2');\n$arr_string_float = array('0' => '1.00', '1.00' => '2.00');\nfunction key_compare_func($key1, $key2)\n{\n    if ($key1 === $key2) {\n        return 0;\n    }\n    return ($key1 > $key2)? 1:-1;\n}\necho \"\\n-- Result of comparing floating points and strings containing integers --\\n\";\nvar_dump( array_diff_uassoc($arr_float, $arr_string_int, \"key_compare_func\") );\nvar_dump( array_diff_uassoc($arr_string_int, $arr_float, \"key_compare_func\") );\necho \"\\n-- Result of comparing floating points and strings containing floating point --\\n\";\nvar_dump( array_diff_uassoc($arr_float, $arr_string_float, \"key_compare_func\") );\nvar_dump( array_diff_uassoc($arr_string_float, $arr_float, \"key_compare_func\") );\n?>")).toMatchSnapshot();
  });
});
