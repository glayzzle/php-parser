// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation5.phpt
  it("Test rsort() function : usage variations - String values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass arrays containing different string data to rsort() to test behaviour\n */\necho \"*** Testing rsort() : variation ***\\n\";\n$various_arrays = array (\n// group of escape sequences\narray(null, NULL, \"\\a\", \"\\cx\", \"\\e\", \"\\f\", \"\\n\", \"\\t\", \"\\xhh\", \"\\ddd\", \"\\v\"),\n// array contains combination of capital/small letters\narray(\"lemoN\", \"Orange\", \"banana\", \"apple\", \"Test\", \"TTTT\", \"ttt\", \"ww\", \"x\", \"X\", \"oraNGe\", \"BANANA\")\n);\n$flags = array(\"SORT_REGULAR\" => SORT_REGULAR, \"SORT_STRING\" => SORT_STRING);\n$count = 1;\n// loop through to test rsort() with different arrays\nforeach ($various_arrays as $array) {\n    echo \"\\n-- Iteration $count --\\n\";\n    echo \"- With Default sort flag -\\n\";\n    $temp_array = $array;\n    var_dump(rsort($temp_array) );\n    var_dump($temp_array);\n    // loop through $flags array and setting all possible flag values\n    foreach($flags as $key => $flag){\n        echo \"- Sort flag = $key -\\n\";\n        $temp_array = $array;\n        var_dump(rsort($temp_array, $flag) );\n        var_dump($temp_array);\n    }\n    $count++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
