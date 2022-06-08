// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_basic.phpt
  it("Test array_merge() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of array_merge()\n */\necho \"*** Testing array_merge() : basic functionality ***\\n\";\n//indexed array\n$array1 = array ('zero', 'one', 'two');\n//associative array\n$array2 = array ('a' => 1, 'b' => 2, 'c' => 3);\nvar_dump(array_merge($array1, $array2));\nvar_dump(array_merge($array2, $array1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
