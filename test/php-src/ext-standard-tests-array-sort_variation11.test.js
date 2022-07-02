// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sort_variation11.phpt
  it("Test sort() function : usage variations - sort mixed values, 'sort_flag' as default/SORT_REGULAR (OK to fail as result is unpredectable)", function () {
    expect(parser.parseCode("<?php\n/*\n * testing sort() by providing mixed value array for $array argument with following flag values.\n * flag value as default\n * SORT_REGULAR - compare items normally\n*/\necho \"*** Testing sort() : usage variations ***\\n\";\n// mixed value array\n$mixed_values = array (\n  array(),\n  array(array(33, -5, 6), array(11), array(22, -55), array() ),\n  -4, \"4\", 4.00, \"b\", \"5\", -2, -2.0, -2.98989, \"-.9\", \"True\", \"\",\n  NULL, \"ab\", \"abcd\", 0.0, -0, \"abcd\\x00abcd\\x00abcd\", '', true, false\n);\necho \"\\n-- Testing sort() by supplying mixed value array, 'flag' value is default --\\n\";\n$temp_array = $mixed_values;\nvar_dump(sort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- Testing sort() by supplying mixed value array, 'flag' value is SORT_REGULAR --\\n\";\n$temp_array = $mixed_values;\nvar_dump(sort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
