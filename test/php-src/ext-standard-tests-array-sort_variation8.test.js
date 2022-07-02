// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sort_variation8.phpt
  it("Test sort() function : usage variations - sort array with diff. sub arrays, 'sort_flags' as default/SORT_REGULAR", function () {
    expect(parser.parseCode("<?php\n/*\n * testing sort() by providing arrays contains sub arrays for $array argument with flowing flag values\n * flag value as default\n * SORT_REGULAR - compare items normally\n*/\necho \"*** Testing sort() : usage variations ***\\n\";\n// array of arrays\n$various_arrays = array (\n  // null array\n  array(),\n  // array contains null sub array\n  array( array() ),\n  // array of arrays along with some values\n  array(44, 11, array(64, 61) ),\n  // array containing sub arrays\n  array(array(33, -5, 6), array(11), array(22, -55), array() )\n);\n$count = 1;\necho \"\\n-- Testing sort() by supplying various arrays containing sub arrays --\\n\";\n// loop through to test sort() with different arrays\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  // testing sort() function by supplying different arrays, flag value is default\n  echo \"- With Default sort flag -\\n\";\n  $temp_array = $array;\n  var_dump(sort($temp_array) );\n  var_dump($temp_array);\n  // testing sort() function by supplying different arrays, flag value = SORT_REGULAR\n  echo \"- Sort flag = SORT_REGULAR -\\n\";\n  $temp_array = $array;\n  var_dump(sort($temp_array, SORT_REGULAR) );\n  var_dump($temp_array);\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
