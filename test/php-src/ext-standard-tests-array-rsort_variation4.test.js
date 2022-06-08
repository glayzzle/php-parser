// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation4.phpt
  it("Test rsort() function : usage variations - referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Test behaviour of rsort() when:\n * 1. passed an array of referenced variables\n * 2. $array_arg is a reference to another array\n * 3. $array_arg is passed by reference\n */\necho \"*** Testing rsort() : variation ***\\n\";\n$value1 = 100;\n$value2 = 33;\n$value3 = 555;\n// an array containing integer references\n$unsorted_numerics =  array( &$value1 , &$value2, &$value3);\necho \"\\n-- 'flag' value is default --\\n\";\n$temp_array = $unsorted_numerics;\nvar_dump( rsort($temp_array) );\nvar_dump( $temp_array);\necho \"\\n-- 'flag' = SORT_REGULAR --\\n\";\n$temp_array = &$unsorted_numerics;\nvar_dump( rsort($temp_array, SORT_REGULAR) );\nvar_dump( $temp_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
