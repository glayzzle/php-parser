// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/krsort_variation4.phpt
  it("Test krsort() function : usage variations - sort octal values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing krsort() by providing array of octal values for $array argument\n * with following flag values:\n *  1.flag value as default\n *  2.SORT_REGULAR - compare items normally\n *  3.SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing krsort() : usage variations ***\\n\";\n// an array containing unsorted octal values\n$unsorted_oct_array = array (\n  01235 => 01, 0321 => 02, 0345 => 03, 066 => 04, 0772 => 05,\n  077 => 06, -066 => -01, -0345 => -02, 0 => 0\n);\necho \"\\n-- Testing krsort() by supplying octal value array, 'flag' value is default  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump( krsort($temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing krsort() by supplying octal value array, 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump( krsort($temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing krsort() by supplying octal value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump( krsort($temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
