// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/arsort_variation7.phpt
  it("Test arsort() function : usage variations - sort bool values", function () {
    expect(parser.parseCode("<?php\n/*\n * testing arsort() by providing bool value array for $array argument with following flag values.\n * flag value as default\n * SORT_REGULAR - compare items normally\n*/\necho \"*** Testing arsort() : usage variations ***\\n\";\n// bool value array\n$bool_values = array (1 => true, 2 => false, 3 => TRUE, 4 => FALSE);\necho \"\\n-- Testing arsort() by supplying bool value array, 'flag' value is default --\\n\";\n$temp_array = $bool_values;\nvar_dump(arsort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- Testing arsort() by supplying bool value array, 'flag' value is SORT_REGULAR --\\n\";\n$temp_array = $bool_values;\nvar_dump(arsort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"\\n-- Testing arsort() by supplying bool value array, 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $bool_values;\nvar_dump(arsort($temp_array, SORT_NUMERIC) );\nvar_dump($temp_array);\necho \"\\n-- Testing arsort() by supplying bool value array, 'flag' value is SORT_STRING --\\n\";\n$temp_array = $bool_values;\nvar_dump(arsort($temp_array, SORT_STRING) );\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
