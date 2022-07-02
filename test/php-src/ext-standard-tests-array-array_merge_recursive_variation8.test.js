// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_recursive_variation8.phpt
  it("Test array_merge_recursive() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_merge_recursive() by passing an array having binary values.\n*/\necho \"*** Testing array_merge_recursive() : array with binary data for \\$arr1 argument ***\\n\";\n// array with binary values\n$arr1 = array(b\"1\", b\"hello\" => \"hello\", b\"world\", \"str1\" => b\"hello\", \"str2\" => \"world\");\n// initialize the second argument\n$arr2 = array(b\"str1\" => b\"binary\", b\"hello\" => \"binary\", b\"str2\" => b\"binary\");\necho \"-- With default argument --\\n\";\nvar_dump( array_merge_recursive($arr1) );\necho \"-- With more arguments --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
