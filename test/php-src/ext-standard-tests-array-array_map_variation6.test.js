// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation6.phpt
  it("Test array_map() function : usage variations - array having subarrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing array having different subarrays\n */\necho \"*** Testing array_map() : array having subarrays ***\\n\";\nfunction callback($a)\n{\n  return $a;\n}\n// different subarrays\n$arr1 = array(\n  array(),\n  array(1, 2),\n  array('a', 'b'),\n  array(1, 2, 'a', 'b'),\n  array(1 => 'a', 'b' => 2)\n);\nvar_dump( array_map('callback', $arr1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
