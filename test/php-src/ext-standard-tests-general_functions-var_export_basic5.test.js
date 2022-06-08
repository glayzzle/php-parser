// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_basic5.phpt
  it("Test var_export() function with valid arrays", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing var_export() with valid arrays ***\\n\";\n// different valid  arrays\n$valid_arrays = array(\n           \"array()\" => array(),\n           \"array(NULL)\" => array(NULL),\n           \"array(null)\" => array(null),\n           \"array(true)\" => array(true),\n           \"array(\\\"\\\")\" => array(\"\"),\n           \"array('')\" => array(''),\n           \"array(array(), array())\" => array(array(), array()),\n           \"array(array(1, 2), array('a', 'b'))\" => array(array(1, 2), array('a', 'b')),\n           \"array(1 => 'One')\" => array(1 => 'One'),\n           \"array(\\\"test\\\" => \\\"is_array\\\")\" => array(\"test\" => \"is_array\"),\n           \"array(0)\" => array(0),\n           \"array(-1)\" => array(-1),\n           \"array(10.5, 5.6)\" => array(10.5, 5.6),\n           \"array(\\\"string\\\", \\\"test\\\")\" => array(\"string\", \"test\"),\n           \"array('string', 'test')\" => array('string', 'test')\n);\n/* Loop to check for above arrays with var_export() */\necho \"\\n*** Output for arrays ***\\n\";\nforeach($valid_arrays as $key => $arr) {\n    echo \"\\n--Iteration: $key --\\n\";\n    var_export( $arr );\n    echo \"\\n\";\n    var_export( $arr, FALSE);\n    echo \"\\n\";\n    var_dump( var_export( $arr, TRUE) );\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
