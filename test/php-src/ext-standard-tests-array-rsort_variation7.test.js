// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/rsort_variation7.phpt
  it("Test rsort() function : usage variations - boolean values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass rsort() arrays of boolean values to test behaviour\n */\necho \"*** Testing rsort() : variation ***\\n\";\n// bool value array\n$bool_values = array (true, false, TRUE, FALSE);\necho \"\\n-- 'flag' value is default --\\n\";\n$temp_array = $bool_values;\nvar_dump(rsort($temp_array) );\nvar_dump($temp_array);\necho \"\\n-- 'flag' value is SORT_REGULAR --\\n\";\n$temp_array = $bool_values;\nvar_dump(rsort($temp_array, SORT_REGULAR) );\nvar_dump($temp_array);\necho \"\\n-- 'flag' value is SORT_NUMERIC  --\\n\";\n$temp_array = $bool_values;\nvar_dump(rsort($temp_array, SORT_NUMERIC) );\nvar_dump($temp_array);\necho \"\\n-- 'flag' value is SORT_STRING --\\n\";\n$temp_array = $bool_values;\nvar_dump(rsort($temp_array, SORT_STRING) );\nvar_dump($temp_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
