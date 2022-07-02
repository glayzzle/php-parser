// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_float.phpt
  it("Test is_float() & its is_double() alias", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing is_float(), is_double() with float values***\\n\";\n// different valid  float values\n$floats = array(\n  -2147483649, // float value\n  2147483648,  // float value\n  -0x80000001, // float value, beyond max negative int\n  0x800000001, // float value, beyond max positive int\n  020000000001, // float value, beyond max positive int\n  -020000000001, // float value, beyond max negative int\n  0.0,\n  -0.1,\n  10.0000000000000000005,\n  10.5e+5,\n  1e5,\n  -1e5,\n  1e-5,\n  -1e-5,\n  1e+5,\n  -1e+5,\n  1E5,\n  -1E5,\n  1E+5,\n  -1E+5,\n  1E-5,\n  -1E-5,\n  .5e+7,\n  -.5e+7,\n  .6e-19,\n  -.6e-19,\n  .05E+44,\n  -.05E+44,\n  .0034E-30,\n  -.0034E-30\n);\n/* loop to check that is_float(), is_double() & recognizes\n   different float values, expected: bool(true)  */\n$loop_counter = 1;\nforeach ($floats as $float ) {\n  echo \"-- Iteration $loop_counter --\\n\"; $loop_counter++;\n  var_dump( is_float($float) );\n  var_dump( is_double($float) );\n}\necho \"\\n*** Testing is_float(), is_double() with non float values ***\\n\";\n// get a resource type variable\n$fp = fopen (__FILE__, \"r\");\n$dfp = opendir ( __DIR__ );\n// unset variable\n$unset_var = 10;\nunset ($unset_var);\n// non_scalar values, objects, arrays, resources and boolean\nclass foo\n{\n  var $array = array(10.5);\n};\n$object = new foo();\n$not_floats = array (\n  new foo, //object\n  $object,\n  $fp,  // resource\n  $dfp,\n  array(),  // arrays\n  array(NULL),\n  array(0.5e10),\n  array(1,2,3,4),\n  array(\"string\"),\n  NULL,  // nulls\n  null,\n  true,  // boolean\n  TRUE,\n  false,\n  FALSE,\n  \"\",  // strings\n  '',\n  \"0\",\n  '0',\n  \"0.0\",\n  '0.0',\n  '0.5',\n  \"-0.5\",\n  \"1e5\",\n  '1e5',\n  '1.5e6_string',\n  \"1.5e6_string\",\n  1,  // integers, hex and octal\n  -1,\n  0,\n  12345,\n  0xFF55,\n  -0x673,\n  0123,\n  -0123,\n  @$unset_var,  // unset variable\n  @$undefined_var\n);\n/* loop through the $not_floats to see working of\n   is_float(), is_double() on objects,\n    arrays, boolean and others */\n$loop_counter = 1;\nforeach ($not_floats as $value ) {\n  echo \"--Iteration $loop_counter--\\n\"; $loop_counter++;\n  var_dump( is_float($value) );\n  var_dump( is_double($value) );\n}\necho \"Done\\n\";\n// close the resources used\nfclose($fp);\nclosedir($dfp);\n?>")).toMatchSnapshot();
  });
});
