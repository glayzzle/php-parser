// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation3.phpt
  it("Test rsort() function : usage variations - numeric values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass arrays containing different numeric data to rsort() to test behaviour\n */\necho \"*** Testing rsort() : variation ***\\n\";\n// group of various arrays\n$various_arrays = array (\n// negative/positive integers array\narray(11, -11, 21, -21, 31, -31, 0, 41, -41),\n// float value array\narray(10.5, -10.5, 10.5e2, 10.6E-2, .5, .01, -.1),\n// mixed value array\narray(.0001, .0021, -.01, -1, 0, .09, 2, -.9, 10.6E-2, -10.6E-2, 33),\n// array values contains minimum and maximum ranges\narray(2147483647, 2147483648, -2147483647, -2147483648, -0, 0, -2147483649)\n);\n// set of possible flag values\n$flag_value = array(\"SORT_REGULAR\" => SORT_REGULAR, \"SORT_NUMERIC\" => SORT_NUMERIC);\n$count = 1;\n// loop through to test rsort() with different arrays\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"- With Default sort flag -\\n\";\n  $temp_array = $array;\n  var_dump(rsort($temp_array) );\n  var_dump($temp_array);\n  // loop through $flag_value array and setting all possible flag values\n  foreach($flag_value as $key => $flag){\n    echo \"- Sort flag = $key -\\n\";\n    $temp_array = $array;\n    var_dump(rsort($temp_array, $flag) );\n    var_dump($temp_array);\n  }\n  $count++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
