// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_udiff_assoc_variation.phpt
  it("Test array_udiff_assoc() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_udiff_assoc() : variation - testing with multiple array arguments ***\\n\";\ninclude('compare_function.inc');\n$key_compare_function = 'compare_function';\n// Initialise all required variables\n$arr1 = array(\"one\" => \"one\", \"02\" => \"two\", '3' => \"three\", \"four\", \"0.5\" => 5, 6 => 6, \"seven\" => \"07\");\n$arr2 = array(\"one\" => \"one\", \"02\" => \"two\", '3' => \"three\");\n$arr3 = array(\"four\", \"0.5\" => \"five\", 6 => 6, \"seven\" => 7);\n$arr4 = array(\"four\", \"0.5\" => \"five\", 6 => 6, \"seven\" => 7);\nvar_dump( array_udiff_assoc($arr1, $arr2, $arr3, $arr4, $key_compare_function) );\n?>")).toMatchSnapshot();
  });
});
