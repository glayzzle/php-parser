// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_uintersect_assoc_basic2.phpt
  it("Test array_uintersect_assoc() function : basic functionality - testing with multiple array arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_uintersect_assoc() : basic functionality - testing with multiple array arguments ***\\n\";\ninclude('compare_function.inc');\n$data_compare_function = 'compare_function';\n// Initialise all required variables\n$arr1 = array(\"one\" => \"one\", \"02\" => \"two\", '3' => \"three\", \"four\", \"0.5\" => 5, 0 => 6, \"0x7\" => \"seven\");\n$arr2 = array(\"one\" => \"one\", \"02\" => \"two\", '3' => \"three\");\n$arr3 = array(\"one\" => \"one\", '3' => \"three\", \"0.5\" => 5);\n$arr4 = array(\"one\" => \"one\", '3' => \"three\", \"0.5\" => 5);\nvar_dump( array_uintersect_assoc($arr1, $arr2, $arr3, $arr4, $data_compare_function) );\n?>")).toMatchSnapshot();
  });
});
