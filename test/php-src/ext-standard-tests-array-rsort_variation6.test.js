// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation6.phpt
  it("Test rsort() function : usage variations - Hexadecimal vales", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass rsort() an array of hexadecimal values to test behaviour\n */\necho \"*** Testing rsort() : variation ***\\n\";\n// an array contains unsorted hexadecimal values\n$unsorted_hex_array = array(0x1AB, 0xFFF, 0xF, 0xFF, 0x2AA, 0xBB, 0x1ab, 0xff, -0xFF, 0, -0x2aa);\necho \"\\n-- 'flag' value is default  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(rsort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- 'flag' value is SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(rsort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"\\n-- 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_hex_array;\nvar_dump(rsort($temp_array, SORT_NUMERIC) );\nvar_dump($temp_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
