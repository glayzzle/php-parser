// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/ksort_variation6.phpt
  it("Test ksort() function : usage variations - sort hexadecimal values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing ksort() by providing array of hexa-decimal values for $array argument with following flag values:\n *  1.flag value as default\n *  2.SORT_REGULAR - compare items normally\n *  3.SORT_NUMERIC - compare items numerically\n*/\necho \"*** Testing ksort() : usage variations ***\\n\";\n// an array containng unsorted hexadecimal values with keys\n// There are multiple keys which are duplicate and the later should be picked\n$unsorted_hex_array = array (\n  0x1AB => 0x1AB, 0xFFF => 0xFFF, 0xF => 0xF, 0xFF => 0xFF, 0x2AA => 0x2AA, 0xBB => 0xBB,\n  0x1ab => 0x1ab, 0xff => 0xff, -0xff => -0xFF, 0 => 0, -0x2aa => -0x2aa\n);\necho \"\\n-- Testing ksort() by supplying hexadecimal value array, 'flag' value is default  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(ksort( $temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing ksort() by supplying hexadecimal value array, 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(ksort( $temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing ksort() by supplying hexadecimal value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(ksort( $temp_array, SORT_NUMERIC) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
