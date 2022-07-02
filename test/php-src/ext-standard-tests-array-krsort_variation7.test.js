// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/krsort_variation7.phpt
  it("Test krsort() function : usage variations - sort array with diff. sub arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * testing krsort() by providing arrays contains sub arrays for $array argument\n * with flowing flag values\n *  1.flag  value as default\n *  2.SORT_REGULAR - compare items normally\n*/\necho \"*** Testing krsort() : usage variations ***\\n\";\n// array with diff sub arrays to be sorted\n$various_arrays = array (\n  // null array\n  1  => array(),\n  // array contains null sub array\n  2 => array( 1 => array() ),\n  // array of arrays along with some values\n  3 => array(4 => 44, 1 => 11, 3 => array(64,61) ),\n  // array contains sub arrays\n  4 => array ( 3 => array(33,-5,6), 1 => array(11),\n               2 => array(22,-55), 0  => array() )\n);\n$count = 1;\necho \"\\n-- Testing krsort() by supplying various arrays containing sub arrays --\\n\";\n// loop through to test krsort() with different arrays\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"- With default sort flag -\\n\";\n  $temp_array = $array;\n  var_dump( krsort($temp_array) );\n  var_dump($temp_array);\n  echo \"- Sort flag = SORT_REGULAR -\\n\";\n  $temp_array = $array;\n  var_dump( krsort($temp_array, SORT_REGULAR) );\n  var_dump($temp_array);\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
