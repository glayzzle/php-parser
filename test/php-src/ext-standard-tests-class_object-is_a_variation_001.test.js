// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/is_a_variation_001.phpt
  it("Test is_a() function : usage variations  - wrong type for arg 1", function () {
    expect(parser.parseCode("<?php\n// Note: basic use cases in Zend/tests/is_a.phpt\necho \"*** Testing is_a() : usage variations ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$class_name = 'stdClass';\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n//array of values to iterate over\n$values = array(\n      // int data\n      0,\n      1,\n      12345,\n      -2345,\n      // float data\n      10.5,\n      -10.5,\n      10.1234567e10,\n      10.7654321E-10,\n      .5,\n      // array data\n      array(),\n      array(0),\n      array(1),\n      array(1, 2),\n      array('color' => 'red', 'item' => 'pen'),\n      // null data\n      NULL,\n      null,\n      // boolean data\n      true,\n      false,\n      TRUE,\n      FALSE,\n      // empty data\n      \"\",\n      '',\n      // string data\n      \"string\",\n      'String',\n      // undefined data\n      $undefined_var,\n      // unset data\n      $unset_var,\n);\n// loop through each element of the array for object\nforeach($values as $value) {\n      echo @\"\\nArg value $value \\n\";\n      var_dump( is_a($value, $class_name) );\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
