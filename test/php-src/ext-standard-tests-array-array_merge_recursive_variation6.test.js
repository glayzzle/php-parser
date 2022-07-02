// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_recursive_variation6.phpt
  it("Test array_merge_recursive() function : usage variations - array with duplicate keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_merge_recursive() by passing\n * array having duplicate keys.\n*/\necho \"*** Testing array_merge_recursive() : array with duplicate keys for \\$arr1 argument ***\\n\";\n/* initialize the array having duplicate keys */\n// array with numeric keys\n$arr1_numeric_key = array( 1 => \"one\", 2 => \"two\", 2 => array(1, 2), 3 => \"three\", 1 => array(\"duplicate\", 'strings'));\n// array with string keys\n$arr1_string_key = array(\"str1\" => \"hello\", \"str2\" => 111, \"str1\" => \"world\", \"str2\" => 111.111);\n// initialize the second argument\n$arr2 = array(\"one\", \"str1\" => \"two\", array(\"one\", \"two\"));\necho \"-- With default argument --\\n\";\nvar_dump( array_merge_recursive($arr1_numeric_key) );\nvar_dump( array_merge_recursive($arr1_string_key) );\necho \"-- With more arguments --\\n\";\nvar_dump( array_merge_recursive($arr1_numeric_key, $arr2) );\nvar_dump( array_merge_recursive($arr1_string_key, $arr2) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
