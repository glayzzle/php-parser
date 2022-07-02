// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_recursive_basic2.phpt
  it("Test array_merge_recursive() function : basic functionality - associative arrays", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_merge_recursive() : associative arrays ***\\n\";\n// Initialise the arrays\n$arr1 = array(1 => \"one\", 2 => array(1, 2));\n$arr2 = array(2 => 'three', \"four\" => array(\"hello\", 'world'));\n$arr3 = array(1 => array(6, 7), 'four' => array(\"str1\", 'str2'));\n// Calling array_merge_recursive() with default arguments\necho \"-- With default argument --\\n\";\nvar_dump( array_merge_recursive($arr1) );\n// Calling array_merge_recursive() with more arguments\necho \"-- With more arguments --\\n\";\nvar_dump( array_merge_recursive($arr1,$arr2) );\nvar_dump( array_merge_recursive($arr1,$arr2,$arr3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
