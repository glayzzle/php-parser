// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/asort_variation10.phpt
  it("Test asort() function : usage variations - sort octal values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing asort() by providing different octal array for $array argument with following flag values\n * 1.flag value as default\n * 2.SORT_REGULAR - compare items normally\n * 3.SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing asort() : usage variations ***\\n\";\n// an array contains unsorted octal values\n$unsorted_oct_array = array (\n   01235 => 01235, 0321 => 0321, 0345 => 0345, 066 => 066, 0772 => 0772,\n   077 => 077, -066 => -066, -0345 => -0345, 0 => 0\n);\necho \"\\n-- Testing asort() by supplying octal value array, 'flag' value is default  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump( asort($temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing asort() by supplying octal value array, 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump( asort($temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing asort() by supplying octal value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump( asort($temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
