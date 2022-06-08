// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_variation7.phpt
  it("Test array_diff() function : usage variations - arrays containing referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_diff compares arrays that\n * 1. Contain referenced variables\n * 2. Have been referenced to each other\n */\necho \"*** Testing array_diff() : usage variations ***\\n\";\n$a = 'a';\n$arr1 = array (\"&$a\", 'b', 'c');\n$arr2 = array (1, 2, 3);\necho \"-- Basic Comparison --\\n\";\nvar_dump(array_diff($arr1, $arr2));\nvar_dump(array_diff($arr2, $arr1));\n$a = 1;\necho \"-- \\$a changed --\\n\";\nvar_dump(array_diff($arr1, $arr2));\nvar_dump(array_diff($arr2, $arr1));\n$arr2 = &$arr1;\necho \"-- Arrays referenced to each other --\\n\";\nvar_dump(array_diff($arr1, $arr2));\nvar_dump(array_diff($arr2, $arr1));\n$arr1 = array('x', 'y', 'z');\necho \"-- \\$arr1 changed --\\n\";\nvar_dump(array_diff($arr1, $arr2));\nvar_dump(array_diff($arr2, $arr1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
