// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/ksort_variation4.phpt
  it("Test ksort() function : usage variations - sort bool values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing ksort() by providing array of boolean values for $array argument with following flag values:\n *  1.flag value as default\n *  2.SORT_REGULAR - compare items normally\n*/\necho \"*** Testing ksort() : usage variations ***\\n\";\n// bool value array\n$bool_values = array (true => true, false => false, TRUE => TRUE, FALSE => FALSE);\necho \"\\n-- Testing ksort() by supplying boolean value array, 'flag' value is default --\\n\";\n$temp_array = $bool_values;\nvar_dump(ksort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- Testing ksort() by supplying boolean value array, 'flag' value is SORT_REGULAR --\\n\";\n$temp_array = $bool_values;\nvar_dump(ksort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"\\n-- Testing ksort() by supplying boolean value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $bool_values;\nvar_dump(ksort($temp_array, SORT_NUMERIC) );\nvar_dump($temp_array);\necho \"\\n-- Testing ksort() by supplying boolean value array, 'flag' value is SORT_STRING --\\n\";\n$temp_array = $bool_values;\nvar_dump(ksort($temp_array, SORT_STRING) );\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
