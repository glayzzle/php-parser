// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_variation9.phpt
  it("Test array_merge() function : usage variations - referenced variables", function () {
    expect(parser.parseCode("<?php\n/* Test array_merge() when:\n * 1. Passed an array made up of referenced variables\n * 2. Passed an array as the first argument and a reference to that array as the second.\n */\necho \"*** Testing array_merge() : usage variations ***\\n\";\n$val1 = 'foo';\n$val2 = 'bar';\n$val3 = 'baz';\n$arr1 = array(&$val1, &$val2, &$val3);\n$arr2 = array('key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3');\necho \"\\n-- Merge an array made up of referenced variables to an assoc. array --\\n\";\nvar_dump(array_merge($arr1, $arr2));\nvar_dump(array_merge($arr2, $arr1));\n$val2 = 'hello world';\necho \"\\n-- Change \\$val2 --\\n\";\nvar_dump(array_merge($arr1, $arr2));\nvar_dump(array_merge($arr2, $arr1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
