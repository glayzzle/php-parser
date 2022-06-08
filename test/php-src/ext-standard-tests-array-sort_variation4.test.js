// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sort_variation4.phpt
  it("Test sort() function : usage variations - sort reference values", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing sort() by providing reference variable array with following flag values\n *  flag value as default\n *  SORT_REGULAR - compare items normally\n *  SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing sort() :usage variations  ***\\n\";\n$value1 = 100;\n$value2 = 33;\n$value3 = 555;\n// an array containing integer references\n$unsorted_numerics =  array( &$value1 , &$value2, &$value3);\necho \"\\n-- Testing sort() by supplying reference variable array, 'flag' value is default --\\n\";\n$temp_array = $unsorted_numerics;\nvar_dump( sort($temp_array) ); // expecting : bool(true)\nvar_dump( $temp_array);\necho \"\\n-- Testing sort() by supplying reference variable array, 'flag' = SORT_REGULAR --\\n\";\n$temp_array = &$unsorted_numerics;\nvar_dump( sort($temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump( $temp_array);\necho \"\\n-- Testing sort() by supplying reference variable array, 'flag' = SORT_NUMERIC --\\n\";\n$temp_array = &$unsorted_numerics;\nvar_dump( sort($temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump( $temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
