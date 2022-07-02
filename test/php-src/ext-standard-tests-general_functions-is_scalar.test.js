// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_scalar.phpt
  it("Test is_scalar() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing basic operations ***\\n\";\n$scalar_variables = array(\n  0,  // integers\n  1,\n  -45678,\n  0x5FF,  // hexadecimal as integer\n  0X566,\n  -0xAAF,\n  -0XCCF,\n  01234,  // octal as integer\n  -0126,\n  0.0,  // floats\n  -1.0,\n  1e5,\n  -1e7,\n  1.6E7,\n  475.e-8,\n  784.e+30,\n  98.45E+40,\n  .5E-40,\n  \"\",  // strings\n  '',\n  \" \",\n  ' ',\n  \"string\",\n  'string',\n  \"0\",  // numeric as string\n  \"40\",\n  \"50.696\",\n  \"0x534\",\n  \"0X534\",\n  TRUE,  // boolean\n  FALSE,\n  true,\n  false\n);\n/* loop through each valid scalar variables in $scalar_variables\n   and see the working of is_scalar(), expected output: bool(true)\n*/\n$loop_counter = 1;\nforeach($scalar_variables as $scalar) {\n  echo \"-- Iteration $loop_counter --\\n\"; $loop_counter++;\n  var_dump( is_scalar($scalar) );\n}\necho \"\\n*** Testing possible variations ***\\n\";\n// different scalar variables which are unset\n$int_var = 10;\n$float_var = 1e5;\n$string_var = \"string\";\n$boolean_var = true;\n$object = new stdclass;\n$array = array(10);\n$resource = opendir('.');\nunset($int_var, $float_var, $string_var, $boolean_var, $object, $array, $resource);\n// resources\n$fp = fopen(__FILE__, \"r\");\n$dfp = opendir(\".\");\n$variation_array = array(\n  NULL,\n  null,\n  array(),  // arrays\n  array(NULL),\n  array(true),\n  array(0),\n  array(1,2,3,4),\n  $fp,  // resources\n  $dfp,\n  new stdclass, // object\n  @$int_var,  // scalars that are unset\n  @$float_var,\n  @$string_var,\n  @$boolean_var,\n  @$array,   // non scalars that are unset\n  @$object,\n  @$resource,\n  @$undefined_var  // undefined variable\n);\n/* loop through each element of $variation_array to see the\n   working of is_scalar on non-scalar values, expected output: bool(false)\n*/\n$loop_counter = 1;\nforeach( $variation_array as $value ) {\n  echo \"-- Iteration $loop_counter --\\n\"; $loop_counter++;\n  var_dump( is_scalar($value) );\n}\necho \"Done\\n\";\n// close the resources used\nfclose($fp);\nclosedir($dfp);\n?>")).toMatchSnapshot();
  });
});
