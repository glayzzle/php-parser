// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_recursive_variation7.phpt
  it("Test array_merge_recursive() function : usage variations - array with reference variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_merge_recursive() by passing\n * array having reference variables.\n*/\necho \"*** Testing array_merge_recursive() : array with reference variables for \\$arr1 argument ***\\n\";\n$value1 = 10;\n$value2 = \"hello\";\n$value3 = 0;\n$value4 = &$value2;\n// input array containing elements as reference variables\n$arr1 = array(\n  0 => 0,\n  1 => &$value4,\n  2 => &$value2,\n  3 => \"hello\",\n  4 => &$value3,\n  $value4 => &$value2\n);\n// initialize the second argument\n$arr2 = array($value4 => \"hello\", &$value2);\necho \"-- With default argument --\\n\";\nvar_dump( array_merge_recursive($arr1) );\necho \"-- With more arguments --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
