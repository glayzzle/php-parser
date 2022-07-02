// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive_variation3.phpt
  it("Test array_walk_recursive() function : usage variations - 'input' array with different values", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_walk_recursive() with following types of 'input' arrays:\n *    integer, float, string, bool, null, empty & mixed\n*/\nfunction print_value($value, $key, $count)\n{\n  echo  $count.\" : \".$key.\" \".$value.\"\\n\";\n}\necho \"*** Testing array_walk_recursive() : 'input' array with different values***\\n\";\n// different arrays as input\n$input_values = array(\n       // integer values\n/*1*/  array(array(1, 0, -10), array(023, -041), array(0x5A, 0X1F, -0x6E)),\n       // float value\n       array(array(3.4, 0.8, -2.9), array(6.25e2, 8.20E-3)),\n       // string values\n       array('Mango', array(\"Apple\", 'Orange', \"Lemon\")),\n       // bool values\n/*4*/  array( array(true, false), array(TRUE, FALSE)),\n       // null values\n       array( array(null), array(NULL)),\n       // empty array\n       array(),\n       // binary array\n       array(array(b'binary')),\n       // mixed array\n/*8*/  array(16, 8.345, array(\"Fruits\"), array(true, null), array(FALSE), array(-98, 0.005, 'banana'))\n);\nfor($count = 0; $count < count($input_values); $count++) {\n  echo \"\\n-- Iteration \".($count + 1).\" --\\n\";\n  var_dump( array_walk_recursive($input_values[$count], \"print_value\", $count+1));\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
