// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sort_variation9.phpt
  it("Test sort() function : usage variations - sort diff. associative arrays, 'sort_flags' as default/SORT_REGULAR", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing sort() by providing arrays  with key values for $array argument\n * with following flag values.\n * 1.flag value as default\n * 2.SORT_REGULAR - compare items normally\n * To test the new keys for the elements in the sorted array.\n */\necho \"*** Testing sort() : usage variations ***\\n\";\n// list of arrays with key and values\n$various_arrays = array(\n  array(5 => 55, 6 => 66, 2 => 22, 3 => 33, 1 => 11),\n  array (\"fruits\"  => array(\"a\" => \"orange\", \"b\" => \"banana\", \"c\" => \"apple\"),\n         \"numbers\" => array(1, 2, 3, 4, 5, 6),\n         \"holes\"   => array(\"first\", 5 => \"second\", \"third\")\n        ),\n  array(1, 1, 8 => 1,  4 => 1, 19, 3 => 13),\n  array('bar' => 'baz', \"foo\" => 1),\n  array('a' => 1,'b' => array('e' => 2,'f' => 3),'c' => array('g' => 4),'d' => 5),\n);\n$count = 1;\necho \"\\n-- Testing sort() by supplying various arrays with key values --\\n\";\n// loop through to test sort() with different arrays,\n// to test the new keys for the elements in the sorted array\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"- With Default sort flag -\\n\";\n  $temp_array = $array;\n  var_dump(sort($temp_array) );\n  var_dump($temp_array);\n  echo \"- Sort flag = SORT_REGULAR -\\n\";\n  $temp_array = $array;\n  var_dump(sort($temp_array, SORT_REGULAR) );\n  var_dump($temp_array);\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
