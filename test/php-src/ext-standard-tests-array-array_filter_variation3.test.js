// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation3.phpt
  it("Test array_filter() function : usage variations - Different types of array for 'input' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing different types of array as 'input' argument.\n*/\nfunction always_false($input)\n{\n  return false;\n}\n// callback function returning always true\nfunction always_true($input)\n{\n  return true;\n}\necho \"*** Testing array_filter() : usage variations - different types of array for 'input' argument***\\n\";\n// different types of 'input' array\n$input_values = array(\n  array(0, 1, 2, -1, 034, 0X4A),  // integer values\n  array(0.0, 1.2, 1.2e3, 1.2e-3),  // float values\n  array('value1', \"value2\", '', \" \", \"\"),  // string values\n  array(true, false, TRUE, FALSE),  // bool values\n  array(null, NULL),  // null values\n  array(1 => 'one', 'zero' => 0, -2 => \"value\"), //associative array\n  array(\"one\" => 1, null => 'null', 5 => \"float\", true => 1, \"\" => 'empty'),  // associative array with different keys\n  array(1 => 'one', 2, \"key\" => 'value')  // combinition of associative and non-associative array\n);\n// loop through each element of 'input' with default callback\nfor($count = 0; $count < count($input_values); $count++)\n{\n  echo \"-- Iteration \".($count + 1). \" --\\n\";\n  var_dump( array_filter($input_values[$count]) );\n  var_dump( array_filter($input_values[$count], 'always_true') );\n  var_dump( array_filter($input_values[$count], 'always_false') );\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
