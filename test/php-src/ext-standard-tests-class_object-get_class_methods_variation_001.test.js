// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_class_methods_variation_001.phpt
  it("Test get_class_methods() function : usage variations  - unexpected types", function () {
    expect(parser.parseCode("<?php\nfunction test_error_handler($err_no, $err_msg, $filename, $linenum) {\n    echo \"Error: $err_no - $err_msg\\n\";\n}\nset_error_handler('test_error_handler');\necho \"*** Testing get_class_methods() : usage variations ***\\n\";\n// Initialise function arguments not being substituted (if any)\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n//array of values to iterate over\n$values = array(\n      // int data\n      0,\n      1,\n      12345,\n      -2345,\n      // float data\n      10.5,\n      -10.5,\n      10.1234567e10,\n      10.7654321E-10,\n      .5,\n      // array data\n      array(),\n      array(0),\n      array(1),\n      array(1, 2),\n      array('color' => 'red', 'item' => 'pen'),\n      // null data\n      NULL,\n      null,\n      // boolean data\n      true,\n      false,\n      TRUE,\n      FALSE,\n      // empty data\n      \"\",\n      '',\n      // string data\n      \"string\",\n      'string',\n      // object data\n      new stdclass(),\n      // undefined data\n      $undefined_var,\n      // unset data\n      $unset_var,\n);\n// loop through each element of the array for class\nforeach($values as $value) {\n      echo \"\\nArg value \" . (is_object($value) ? get_class($value) : $value) . \"\\n\";\n      try {\n            var_dump( get_class_methods($value) );\n      } catch (TypeError $exception) {\n            echo $exception->getMessage() . \"\\n\";\n      }\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
