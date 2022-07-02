// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_recursive_basic1.phpt
  it("Test array_merge_recursive() function : basic functionality - array with default keys", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_merge_recursive() : array with default keys ***\\n\";\n// Initialise the arrays\n$arr1 = array(1, array(1, 2));\n$arr2 = array(3, array(\"hello\", 'world'));\n$arr3 = array(array(6, 7), array(\"str1\", 'str2'));\n// Calling array_merge_recursive() without arguments\necho \"-- Without arguments --\\n\";\nvar_dump( array_merge_recursive() );\n// Calling array_merge_recursive() with default arguments\necho \"-- With default argument --\\n\";\nvar_dump( array_merge_recursive($arr1) );\n// Calling array_merge_recursive() with more arguments\necho \"-- With more arguments --\\n\";\nvar_dump( array_merge_recursive($arr1,$arr2) );\nvar_dump( array_merge_recursive($arr1,$arr2,$arr3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
