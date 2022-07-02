// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_variation5.phpt
  it("Test array_diff() function : usage variations - comparing integers, float\nand string array values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_diff compares integers, floats and strings\n */\necho \"*** Testing array_diff() : usage variations ***\\n\";\n$arr_int = array(1, 2, 3);\n$arr_float = array(1.00, 2.00, 3.00);\n$arr_int_str = array('1', '2', '3');\n$arr_float_str = array('1.00', '2.00', '3.00');\nprint \"-- Compare integers and floats: --\\n\";\nvar_dump(array_diff($arr_int, $arr_float));\nvar_dump(array_diff($arr_float, $arr_int));\nprint \"-- Compare integers and strings containing an integers: --\\n\";\nvar_dump(array_diff($arr_int, $arr_int_str));\nvar_dump(array_diff($arr_int_str, $arr_int));\nprint \"-- Compare integers and strings containing floats: --\\n\";\nvar_dump(array_diff($arr_int, $arr_float_str));\nvar_dump(array_diff($arr_float_str, $arr_int));\nprint \"-- Compare floats and strings containing integers: --\\n\";\nvar_dump(array_diff($arr_float, $arr_int_str));\nvar_dump(array_diff($arr_int_str, $arr_float));\nprint \"-- Compare floats and strings containing floats: --\\n\";\nvar_dump(array_diff($arr_float, $arr_float_str));\nvar_dump(array_diff($arr_float_str, $arr_float));\nprint \"-- Compare strings containing integers and strings containing floats: --\\n\";\nvar_dump(array_diff($arr_int_str, $arr_float_str));\nvar_dump(array_diff($arr_float_str, $arr_int_str));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
