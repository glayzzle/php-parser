// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/asort_variation6.phpt
  it("Test asort() function : usage variations - sort hexadecimal values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing asort() by providing different hexa-decimal array for $array argument with following flag values\n * flag value as default\n * SORT_REGULAR - compare items normally\n * SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing asort() : usage variations ***\\n\";\n// an array contains unsorted hexadecimal values\n// There are multiple keys which are duplicate and the later should be picked\n$unsorted_hex_array = array ( 0x1AB => 0x1AB, 0xFFF => 0xFFF, 0xF => 0xF, 0xFF => 0xFF, 0x2AA => 0x2AA, 0xBB => 0xBB,\n                              0x1ab => 0x1ab, 0xff => 0xff, -0xff => -0xFF, 0 => 0, -0x2aa => -0x2aa\n                            );\necho \"\\n-- Testing asort() by supplying hexadecimal value array, 'flag' value is default  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(asort($temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing asort() by supplying hexadecimal value array, 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(asort($temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing asort() by supplying hexadecimal value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(asort($temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
