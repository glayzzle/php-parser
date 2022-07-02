// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/krsort_variation9.phpt
  it("Test krsort() function : usage variations - sort array with/without key values", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing krsort() by providing arrays  with/without key values for $array argument\n * with following flag values:\n *  1.flag value as default\n *  2.SORT_REGULAR - compare items normally\n */\necho \"*** Testing krsort() : usage variations ***\\n\";\n// list of arrays with/without key values\n$various_arrays = array (\n  array(5 => 55,  66, 22, 33, 11),\n  array (\"a\" => \"orange\",  \"banana\", \"c\" => \"apple\"),\n  array(1, 2, 3, 4, 5, 6),\n  array(\"first\", 5 => \"second\", 1 => \"third\"),\n  array(1, 1, 8 => 1,  4 => 1, 19, 3 => 13),\n  array('bar' => 'baz', \"foo\" => 1),\n  array('a' => 1,'b' => array('e' => 2,'f' => 3),'c' => array('g' => 4),'d' => 5),\n);\n$count = 1;\necho \"\\n-- Testing krsort() by supplying various arrays with/without key values --\\n\";\n// loop through to test krsort() with different arrays,\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"- With default sort flag -\\n\";\n  $temp_array = $array;\n  var_dump( krsort($temp_array) );\n  var_dump($temp_array);\n  echo \"- Sort flag = SORT_REGULAR -\\n\";\n  $temp_array = $array;\n  var_dump( krsort($temp_array, SORT_REGULAR) );\n  var_dump($temp_array);\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
