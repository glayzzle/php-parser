// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_variation8.phpt
  it("Test array_merge() function : usage variations - multi-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_merge() with multi-dimensional arrays\n */\necho \"*** Testing array_merge() : usage variations ***\\n\";\n$arr1 = array('zero', 'one', 'two', array(0));\n$arr2 = array(1, 2, 3);\necho \"\\n-- Merge a two-dimensional and a one-dimensional array --\\n\";\nvar_dump(array_merge($arr1, $arr2));\necho \"\\n-- Merge an array and a sub-array --\\n\";\nvar_dump(array_merge($arr1[3], $arr2));\nvar_dump(array_merge($arr2, $arr1[3]));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
