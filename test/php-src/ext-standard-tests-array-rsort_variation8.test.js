// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation8.phpt
  it("Test rsort() function : usage variations - multi-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass rsort() multi-dimensional arrays to test behaviour\n */\necho \"*** Testing rsort() : variation ***\\n\";\n// array of arrays\n$various_arrays = array (\n  // null array\n  array(),\n  // array contains null sub array\n  array( array() ),\n  // array of arrays along with some values\n  array(44, 11, array(64, 61) ),\n  // array containing sub arrays\n  array(array(33, -5, 6), array(11), array(22, -55), array() )\n);\n$count = 1;\n// loop through to test rsort() with different arrays\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"\\n-- 'flag' value is default --\\n\";\n  $temp_array = $array;\n  var_dump(rsort($temp_array) );\n  var_dump($temp_array);\n  echo \"\\n-- 'flag' value is SORT_REGULAR --\\n\";\n  $temp_array = $array;\n  var_dump(rsort($temp_array, SORT_REGULAR) );\n  var_dump($temp_array);\n  $count++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
