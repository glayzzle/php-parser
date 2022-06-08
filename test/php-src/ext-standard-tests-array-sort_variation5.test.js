// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sort_variation5.phpt
  it("Test sort() function : usage variations - sort strings", function () {
    expect(parser.parseCode("<?php\n/*\n * testing sort() by providing different string arrays for $array argument with following flag values\n *  flag  value as default\n *  SORT_REGULAR - compare items normally\n *  SORT_STRING  - compare items as strings\n*/\necho \"*** Testing sort() : usage variations ***\\n\";\n$various_arrays = array (\n  // group of escape sequences\n  array(null, NULL, \"\\a\", \"\\cx\", \"\\e\", \"\\f\", \"\\n\", \"\\r\", \"\\t\", \"\\xhh\", \"\\ddd\", \"\\v\"),\n  // array contains combination of capital/small letters\n  array(\"lemoN\", \"Orange\", \"banana\", \"apple\", \"Test\", \"TTTT\", \"ttt\", \"ww\", \"x\", \"X\", \"oraNGe\", \"BANANA\")\n);\n$flags = array(\"SORT_REGULAR\" => SORT_REGULAR, \"SORT_STRING\" => SORT_STRING);\n$count = 1;\necho \"\\n-- Testing sort() by supplying various string arrays --\\n\";\n// loop through to test sort() with different arrays\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"- With Default sort flag -\\n\";\n  $temp_array = $array;\n  var_dump(sort($temp_array) ); // expecting : bool(true)\n  var_dump($temp_array);\n  // loop through $flags array and setting all possible flag values\n  foreach($flags as $key => $flag){\n    echo \"- Sort flag = $key -\\n\";\n    $temp_array = $array;\n    var_dump(sort($temp_array, $flag) ); // expecting : bool(true)\n    var_dump($temp_array);\n  }\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
