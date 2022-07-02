// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/floatval_basic.phpt
  it("Testing floatval() and its alias doubleval() Functions", function () {
    expect(parser.parseCode("<?php\n// different valid  float values\n$valid_floats = array(\n       \"0.0\"  => 0.0,\n       \"1.0\"  => 1.0,\n       \"-1.0\" => -1.0,\n       \"1.234\" => 1.234,\n       \"-1.234\" => -1.234,\n       \"1.2e3\" => 1.2e3,\n       \"-1.2e3\" => -1.2e3,\n       \"10.0000000000000000005\" => 10.0000000000000000005,\n       \"10.5e+5\" => 10.5e+5,\n       \"1e5\" => 1e5,\n       \"-1e5\" => -1e5,\n       \"1e5\" => 1e-5,\n       \"-1e-1\" => -1e-1,\n       \"1e+5\" => 1e+5,\n       \"-1e+5\" =>-1e+5,\n       \"1E5\" => 1E5,\n       \"-1E5\" => -1E5,\n       \"1E+5\" => 1E+5,\n       \"-1E5\" => -1E+5,\n       \".5e+7\" => .5e+7,\n       \"-.5e+7\" =>-.5e+7\n);\n/* loop to check that floatval() recognizes different\n   float values, expected output:float value for valid floating point number */\necho \"*** Testing floatval() with valid float values ***\\n\";\nforeach ($valid_floats as $key => $value ) {\n   echo \"\\n-- Iteration : $key -- \\n\";\n   var_dump( floatval($value) );\n}\n/* loop to check that doubleval() also recognizes different\n   float values, expected output:float value for valid floating point number */\necho \"\\n*** Testing doubleval() with valid float values ***\\n\";\nforeach ($valid_floats as $key => $value ) {\n   echo \"\\n-- Iteration : $key -- \\n\";\n   var_dump( doubleval($value) );\n}\n?>")).toMatchSnapshot();
  });
});
