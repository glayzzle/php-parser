// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_assoc_variation5.phpt
  it("Test array_diff_assoc() function : usage variations - compare integers, floats and strings", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_diff_assoc compares integers, floats and string\n */\necho \"*** Testing array_diff_assoc() : usage variations ***\\n\";\n$arr_default_int = array(1, 2, 3, 'a');\n$arr_float = array(0 => 1.00, 1 => 2.00, 2 => 3.00, 'b');\n$arr_string = array('1', '2', '3', 'c');\n$arr_string_float = array('0' => '1.00', '1.00' => '2.00', '2.00' => '3.00', 'd');\necho \"-- Result of comparing integers and floating point numbers: --\\n\";\nvar_dump(array_diff_assoc($arr_default_int, $arr_float));\nvar_dump(array_diff_assoc($arr_float, $arr_default_int));\necho \"-- Result of comparing integers and strings containing an integers : --\\n\";\nvar_dump(array_diff_assoc($arr_default_int, $arr_string));\nvar_dump(array_diff_assoc($arr_string, $arr_default_int));\necho \"-- Result of comparing integers and strings containing floating points : --\\n\";\nvar_dump(array_diff_assoc($arr_default_int, $arr_string_float));\nvar_dump(array_diff_assoc($arr_string_float, $arr_default_int));\necho \"-- Result of comparing floating points and strings containing integers : --\\n\";\nvar_dump(array_diff_assoc($arr_float, $arr_string));\nvar_dump(array_diff_assoc($arr_string, $arr_float));\necho \"-- Result of comparing floating points and strings containing floating point: --\\n\";\nvar_dump(array_diff_assoc($arr_float, $arr_string_float));\nvar_dump(array_diff_assoc($arr_string_float, $arr_float));\necho \"-- Result of comparing strings containing integers and strings containing floating points : --\\n\";\nvar_dump(array_diff_assoc($arr_string, $arr_string_float));\nvar_dump(array_diff_assoc($arr_string_float, $arr_string));\necho \"-- Result of comparing more than two arrays: --\\n\";\nvar_dump(array_diff_assoc($arr_default_int, $arr_float, $arr_string, $arr_string_float));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
