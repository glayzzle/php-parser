// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_variation5.phpt
  it("Test array_diff_uassoc() function : usage variation - Comparing integers and floating point numbers", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_uassoc() : usage variation ***\\n\";\n//Initialize variables\n$arr_default_int = array(1, 2, 3, 4);\n$arr_float = array(0 => 1.00, 1 => 2.00, 2 => 3.00, 3 => 4.00);\nfunction key_compare_func($key1, $key2)\n{\n    if ($key1 === $key2) {\n        return 0;\n    }\n    return ($key1 > $key2)? 1:-1;\n}\necho \"\\n-- Result of comparing integers and floating point numbers --\\n\";\nvar_dump( array_diff_uassoc($arr_default_int, $arr_float, \"key_compare_func\") );\nvar_dump( array_diff_uassoc($arr_float, $arr_default_int, \"key_compare_func\") );\n?>")).toMatchSnapshot();
  });
});
