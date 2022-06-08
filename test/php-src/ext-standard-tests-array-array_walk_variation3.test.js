// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_variation3.phpt
  it("Test array_walk() function : usage variations - 'input' array with different values", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_walk() with following types of 'input' arrays:\n *    integer, float, string, bool, null, empty & mixed\n*/\nfunction print_value($value, $key, $count)\n{\n  echo  $count.\" : \".$key.\" \".$value.\"\\n\";\n}\necho \"*** Testing array_walk() : 'input' array with different values***\\n\";\n// different arrays as input\n$input_values = array(\n       // integer values\n/*1*/  array(1, 0, -10, 023, -041, 0x5A, 0X1F, -0x6E),\n       // float value\n       array(3.4, 0.8, -2.9, 6.25e2, 8.20E-3),\n       // string values\n       array('Mango', \"Apple\", 'Orange', \"Lemon\"),\n       // bool values\n/*4*/  array(true, false, TRUE, FALSE),\n       // null values\n       array(null, NULL),\n       // empty array\n       array(),\n       // binary array\n       array(b\"binary\"),\n       // mixed array\n/*8*/  array(16, 8.345, \"Fruits\", true, null, FALSE, -98, 0.005, 'banana')\n);\nfor($count = 0; $count < count($input_values); $count++) {\n  echo \"\\n-- Iteration \".($count + 1).\" --\\n\";\n  var_dump( array_walk($input_values[$count], \"print_value\", $count+1));\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
