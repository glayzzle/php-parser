// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation10.phpt
  it("Test rsort() function : usage variations - Octal values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass rsort() an array containing octal values to test behaviour\n */\necho \"*** Testing rsort() : variation ***\\n\";\n// an array containing unsorted octal values\n$unsorted_oct_array = array(01235, 0321, 0345, 066, 0772, 077, -066, -0345, 0);\necho \"\\n-- Sort flag = default  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump(rsort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- Sort flag = SORT_REGULAR  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump(rsort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"\\n-- Sort flag = SORT_NUMERIC  --\\n\";\n$temp_array = $unsorted_oct_array;\nvar_dump(rsort($temp_array, SORT_NUMERIC) );\nvar_dump($temp_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
