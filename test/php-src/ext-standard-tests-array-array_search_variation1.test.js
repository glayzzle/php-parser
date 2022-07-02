// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_search_variation1.phpt
  it("Test array_search() function : usage variations - different needle values", function () {
    expect(parser.parseCode("<?php\n/* Test array_search() with different possible needle values */\necho \"*** Testing array_search() with different needle values ***\\n\";\n$arrays = array (\n  array(0),\n  array(\"a\" => \"A\", 2 => \"B\", \"C\" => 3, 4 => 4, \"one\" => 1, \"\" => NULL, \"b\", \"ab\", \"abcd\"),\n  array(4, array(1, 2 => 3), \"one\" => 1, \"5\" => 5 ),\n  array(-1, -2, -3, -4, -2.989888, \"-0.005\" => \"neg0.005\", 2 => \"float2\", \"-.9\" => -.9),\n  array(TRUE, FALSE),\n  array(\"\", array()),\n  array(\"abcd\\x00abcd\\x00abcd\"),\n  array(\"abcd\\tabcd\\nabcd\\rabcd\\0abcdefghij\")\n);\n$array_compare = array (\n  4,\n  \"4\",\n  4.00,\n  \"b\",\n  \"5\",\n  -2,\n  -2.0,\n  -2.98989,\n  \"-.9\",\n  \"True\",\n  \"\",\n  array(),\n  NULL,\n  \"ab\",\n  \"abcd\",\n  0.0,\n  -0,\n  \"abcd\\x00abcd\\x00abcd\"\n);\n/* loop to check if elements in $array_compare exist in $arrays\n   using array_search() */\n$counter = 1;\nforeach($arrays as $array) {\n  foreach($array_compare as $compare) {\n    echo \"-- Iteration $counter --\\n\";\n    //strict option OFF\n    var_dump(array_search($compare,$array));\n    //strict option ON\n    var_dump(array_search($compare,$array,TRUE));\n    //strict option OFF\n    var_dump(array_search($compare,$array,FALSE));\n    $counter++;\n }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
