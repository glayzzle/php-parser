// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_recursive_variation10.phpt
  it("Test array_merge_recursive() function : usage variations - two dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_merge_recursive() by passing\n * two dimensional arrays for $arr1 argument.\n*/\necho \"*** Testing array_merge_recursive() : two dimensional array for \\$arr1 argument ***\\n\";\n// initialize the 2-d array\n$arr1 = array(\n  array(1, 2, 3, 1),\n  \"array\" => array(\"hello\", \"world\", \"str1\" => \"hello\", \"str2\" => 'world'),\n  array(1 => \"one\", 2 => \"two\", \"one\", 'two'),\n  array(1, 2, 3, 1)\n);\n// initialize the second argument\n$arr2 = array(1, \"hello\", \"array\" => array(\"hello\", 'world'));\necho \"-- Passing the entire 2-d array --\\n\";\necho \"-- With default argument --\\n\";\nvar_dump( array_merge_recursive($arr1) );\necho \"-- With more arguments --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\necho \"-- Passing the sub-array --\\n\";\necho \"-- With default argument --\\n\";\nvar_dump( array_merge_recursive($arr1[\"array\"]) );\necho \"-- With more arguments --\\n\";\nvar_dump( array_merge_recursive($arr1[\"array\"], $arr2[\"array\"]) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
