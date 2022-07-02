// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation11.phpt
  it("Test rsort() function : usage variations - mixed array", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass rsort() an array of different data types to test behaviour\n */\necho \"*** Testing rsort() : variation ***\\n\";\n// mixed value array\n$mixed_values = array (\n  array(),\n  array( array(33, -5, 6),\n         array(11),\n         array(22, -55),\n         array()\n        ),\n  -4, \"4\", 4.00, \"b\", \"5\", -2, -2.0, -2.98989, \"-.9\", \"True\", \"\",\n  NULL, \"ab\", \"abcd\", 0.0, -0, \"abcd\\x00abcd\\x00abcd\", '', true, false\n);\necho \"\\n-- Sort flag = default --\\n\";\n$temp_array = $mixed_values;\nvar_dump(rsort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- Sort flag = SORT_REGULAR --\\n\";\n$temp_array = $mixed_values;\nvar_dump(rsort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
