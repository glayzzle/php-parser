// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation8.phpt
  it("Test array_map() function : usage variations - array with references", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing array having reference values for $arr1 argument\n */\necho \"*** Testing array_map() : array with references for 'arr1' argument ***\\n\";\nfunction callback1($a)\n{\n  return ($a);\n}\nfunction callback_cat($a, $b)\n{\n  return ($a . $b);\n}\n// reference variables\n$value1 = 10;\n$value2 = \"hello\";\n$value3 = 0;\n$value4 = &$value2;\n// array containing reference variables\n$arr1 = array(\n  0 => 0,\n  1 => &$value4,\n  2 => &$value2,\n  3 => \"hello\",\n  4 => &$value3,\n  $value4 => &$value2\n);\necho \"-- with one array --\\n\";\nvar_dump( array_map('callback1', $arr1) );\necho \"-- with two arrays --\\n\";\nvar_dump( array_map('callback_cat', $arr1, $arr1) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
