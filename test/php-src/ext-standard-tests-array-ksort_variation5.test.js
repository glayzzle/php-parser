// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/ksort_variation5.phpt
  it("Test ksort() function : usage variations - sort strings", function () {
    expect(parser.parseCode("<?php\n/*\n * testing ksort() by providing array of string values for $array argument with\n * following flag values:\n *  1.flag value as default\n *  2.SORT_REGULAR - compare items normally\n *  3.SORT_STRING  - compare items as strings\n*/\necho \"*** Testing ksort() : usage variations ***\\n\";\n$various_arrays = array (\n  // diff. escape sequence chars with key values\n  array ( null =>  null, NULL => NULL, \"\\a\" => \"\\a\", \"\\cx\" => \"\\cx\", \"\\e\" => \"\\e\",\n          \"\\f\" => \"\\f\", \"\\n\" =>\"\\n\", \"\\r\" => \"\\r\", \"\\t\" => \"\\t\", \"\\xhh\" => \"\\xhh\",\n          \"\\ddd\" => \"\\ddd\", \"\\v\" => \"\\v\"\n        ),\n  // array containing different strings with key values\n  array ( 'Lemon' => \"lemoN\", 'o' => \"Orange\", 'B' => \"banana\", 'Apple' => \"apple\", 'te' => \"Test\",\n          't' => \"TTTT\", 'T' => \"ttt\", 'W' => \"ww\", 'X' => \"x\", 'x' => \"X\", 'O' => \"oraNGe\",\n          'B' => \"BANANA\"\n        )\n);\n$flags = array(\"SORT_REGULAR\" => SORT_REGULAR, \"SORT_STRING\" => SORT_STRING);\n$count = 1;\necho \"\\n-- Testing ksort() by supplying various string arrays --\\n\";\n// loop through to test ksort() with different arrays\nforeach ($various_arrays as $array) {\n  echo \"\\n-- Iteration $count --\\n\";\n  echo \"- With default sort flag -\\n\";\n  $temp_array = $array;\n  var_dump(ksort($temp_array) ); // expecting : bool(true)\n  var_dump($temp_array);\n  // loop through $flags array and call ksort() with all possible sort flag values\n  foreach($flags as $key => $flag){\n    echo \"- Sort flag = $key -\\n\";\n    $temp_array = $array;\n    var_dump(ksort($temp_array, $flag) ); // expecting : bool(true)\n    var_dump($temp_array);\n  }\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
