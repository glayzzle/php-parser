// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_assoc_variation7.phpt
  it("Test array_diff_assoc() function : usage variations - arrays containing referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Tests how array_diff_assoc compares\n * 1. Referenced variables\n * 2. Arrays that have been referenced to each other\n */\necho \"*** Testing array_diff_assoc() : usage variations ***\\n\";\n$a = 'a';\n$arr1 = array('a', 'b', 'c', $a);\n$arr2 = array('a' => 1, 'b' => 2, 'c' => 3, &$a);\necho \"-- Results when \\$a = $a: --\\n\";\nvar_dump(array_diff_assoc($arr1, $arr2));\nvar_dump(array_diff_assoc($arr2, $arr1));\n$a = 4;\necho \"-- Results when \\$a has been changed to $a: --\\n\";\nvar_dump(array_diff_assoc($arr1, $arr2));\nvar_dump(array_diff_assoc($arr2, $arr1));\n$arr2 = &$arr1;\necho \"-- Results when \\$arr2 is referenced to \\$arr1 --\\n\";\nvar_dump(array_diff_assoc($arr1, $arr2));\nvar_dump(array_diff_assoc($arr2, $arr1));\n$arr1 = array('zero' => 'x', 'one' => 'y', 'two' => 'z');\necho \"-- Results when \\$arr1 is changed --\\n\";\nvar_dump(array_diff_assoc($arr1, $arr2));\nvar_dump(array_diff_assoc($arr2, $arr1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
