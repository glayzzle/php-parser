// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/krsort_variation6.phpt
  it("Test krsort() function : usage variations - sort hexadecimal values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing krsort() by providing array of hexa-decimal values for $array argument\n * with following flag values:\n *  1.flag value as default\n *  2.SORT_REGULAR - compare items normally\n *  3.SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing krsort() : usage variations ***\\n\";\n// an array containing unsorted hexadecimal values with keys\n$unsorted_hex_array = array (\n  0x1AB => 0x1AB, 0xFFF => 0xFFF, 0xF => 0xF, 0xFF => 0xFF, 0x2AA => 0x2AA, 0xBB => 0xBB,\n  0x1ab => 0x1ab, 0xff => 0xff, -0xff => -0xFF, 0 => 0, -0x2aa => -0x2aa\n);\necho \"\\n-- Testing krsort() by supplying hexadecimal value array, 'flag' value is default  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(krsort( $temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing krsort() by supplying hexadecimal value array, 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(krsort( $temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing krsort() by supplying hexadecimal value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(krsort( $temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
