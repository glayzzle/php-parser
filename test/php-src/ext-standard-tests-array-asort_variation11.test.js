// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/asort_variation11.phpt
  it("Test asort() function : usage variations - sort mixed values, 'sort_flags' as default/SORT_REGULAR (OK to fail as result is unpredectable)", function () {
    expect(parser.parseCode("<?php\n/*\n * testing asort() by providing mixed value array for $array argument with following flag values.\n * 1.flag value as default\n * 2.SORT_REGULAR - compare items normally\n*/\necho \"*** Testing asort() : usage variations ***\\n\";\n// mixed value array with different key values\n$mixed_values = array (\n  \"array1\" => array(),\n  \"array2\" => array ( \"sub_array[2,1]\" => array(33,-5,6), \"sub_array[2,2]\" => array(11),\n                      \"sub_array[2,3]\" => array(22,-55), \"sub_array[2,4]\" => array()\n                    ),\n  4 => 4, \"4\" => \"4\", 4 => 4.01, \"b\" => \"b\", \"5\" => \"5\", -2 => -2, -2 => -2.01,\n  -2 => -2.98989, \"-.9\" => \"-.9\", \"True\" => \"True\", \"\" =>  \"\", NULL => NULL,\n  \"ab\" => \"ab\", \"abcd\" => \"abcd\", 0 => 0.01, -0 => -0, '' => '' ,\n  \"abcd\\x00abcd\\x00abcd\" => \"abcd\\x00abcd\\x00abcd\", 0 => 0.001\n);\necho \"\\n-- Testing asort() by supplying mixed value array, 'flag' value is default --\\n\";\n$temp_array = $mixed_values;\nvar_dump( asort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- Testing asort() by supplying mixed value array, 'flag' value is SORT_REGULAR --\\n\";\n$temp_array = $mixed_values;\nvar_dump( asort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
