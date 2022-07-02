// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation9.phpt
  it("Test rsort() function : usage variations - mixed associative arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass rsort() associative arrays to test key re-assignment\n */\necho \"*** Testing rsort() : variation ***\\n\";\n// Associative arrays\n$various_arrays = array(\n    // numeric assoc. only array\n    array(5 => 55, 6 => 66, 2 => 22, 3 => 33, 1 => 11),\n    // two-dimensional assoc. and default key array\n    array(\"fruits\"  => array(\"a\" => \"orange\", \"b\" => \"banana\", \"c\" => \"apple\"),\n          \"numbers\" => array(1, 2, 3, 4, 5, 6),\n          \"holes\"   => array(\"first\", 5 => \"second\", \"third\")),\n    // numeric assoc. and default key array\n    array(1, 1, 8 => 1,  4 => 1, 19, 3 => 13),\n    // mixed assoc. array\n    array('bar' => 'baz', \"foo\" => 1),\n    // assoc. only multi-dimensional array\n    array('a' => 1,'b' => array('e' => 2,'f' => 3),'c' => array('g' => 4),'d' => 5),\n);\n$count = 1;\n// loop through to test rsort() with different arrays,\n// to test the new keys for the elements in the sorted array\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"-- Sort flag = default --\\n\";\n  $temp_array = $array;\n  var_dump(rsort($temp_array) );\n  var_dump($temp_array);\n  echo \"-- Sort flag = SORT_REGULAR --\\n\";\n  $temp_array = $array;\n  var_dump(rsort($temp_array, SORT_REGULAR) );\n  var_dump($temp_array);\n  $count++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
