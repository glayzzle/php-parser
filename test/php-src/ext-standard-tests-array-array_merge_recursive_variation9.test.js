// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_recursive_variation9.phpt
  it("Test array_merge_recursive() function : usage variations - common key and value(Bug#43559)", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the functionality of array_merge_recursive() by passing\n * arrays having common key and value.\n*/\necho \"*** Testing array_merge_recursive() : arrays with common key and value ***\\n\";\n/* initialize the array having duplicate values */\n// integer values\n$arr1 = array(\"a\" => 1, \"b\" => 2);\n$arr2 = array(\"b\" => 2, \"c\" => 4);\necho \"-- Integer values --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\n// float values\n$arr1 = array(\"a\" => 1.1, \"b\" => 2.2);\n$arr2 = array(\"b\" => 2.2, \"c\" => 3.3);\necho \"-- Float values --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\n// string values\n$arr1 = array(\"a\" => \"hello\", \"b\" => \"world\");\n$arr2 = array(\"b\" => \"world\", \"c\" => \"string\");\necho \"-- String values --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\n// boolean values\n$arr1 = array(\"a\" => true, \"b\" => false);\n$arr2 = array(\"b\" => false);\necho \"-- Boolean values --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\n// null values\n$arr1 = array( \"a\" => NULL);\n$arr2 = array( \"a\" => NULL);\necho \"-- Null values --\\n\";\nvar_dump( array_merge_recursive($arr1, $arr2) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
