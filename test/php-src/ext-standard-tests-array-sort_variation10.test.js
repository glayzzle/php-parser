// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sort_variation10.phpt
  it("Test sort() function : usage variations - sort octal values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing sort() by providing different octal array for $array argument\n * with following flag values\n * 1.flag value as default\n * 2.SORT_REGULAR - compare items normally\n * 3.SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing sort() : usage variations ***\\n\";\n// an array containing unsorted octal values\n$unsorted_oct_array = array(01235, 0321, 0345, 066, 0772, 077, -066, -0345, 0);\necho \"\\n-- Testing sort() by supplying octal value array, 'flag' value is default  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump(sort($temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing sort() by supplying octal value array, 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump(sort($temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing sort() by supplying octal value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump(sort($temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
