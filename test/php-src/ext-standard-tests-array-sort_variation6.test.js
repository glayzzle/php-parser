// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sort_variation6.phpt
  it("Test sort() function : usage variations - sort hexadecimal values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing sort() by providing different hexa-decimal array for $array argument with following flag values\n * flag  value as default\n * SORT_REGULAR - compare items normally\n * SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing sort() : usage variations ***\\n\";\n// an array contains unsorted hexadecimal values\n$unsorted_hex_array = array(0x1AB, 0xFFF, 0xF, 0xFF, 0x2AA, 0xBB, 0x1ab, 0xff, -0xFF, 0, -0x2aa);\necho \"\\n-- Testing sort() by supplying hexadecimal value array, 'flag' value is default  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(sort($temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing sort() by supplying hexadecimal value array, 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(sort($temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing sort() by supplying hexadecimal value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(sort($temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
