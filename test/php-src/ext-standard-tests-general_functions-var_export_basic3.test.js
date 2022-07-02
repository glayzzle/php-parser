// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_basic3.phpt
  it("Test var_export() function with valid float values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing var_export() with valid float values ***\\n\";\n// different valid  float values\n$valid_floats = array(\n      \"-2147483649\" => (float)-2147483649, // float value\n      \"2147483648\" => (float)2147483648,  // float value\n      \"-0x80000001\" => (float)-0x80000001, // float value, beyond max negative int\n      \"0x800000001\" => (float)0x800000001, // float value, beyond max positive int\n      \"020000000001\" => (float)020000000001, // float value, beyond max positive int\n      \"-020000000001\" => (float)-020000000001, // float value, beyond max negative int\n      \"0.0\" => 0.0,\n      \"-0.1\" => -0.1,\n      \"10.0000000000000000005\" => 10.0000000000000000005,\n      \"10.5e+5\" => 10.5e+5,\n      \"1e5\" => 1e5,\n      \"1e-5\" => 1e-5,\n      \"1e+5\" => 1e+5,\n      \"1E5\" => 1E5,\n      \"1E+5\" => 1E+5,\n      \"1E-5\" => 1E-5,\n      \".5e+7\" => .5e+7,\n      \".6e-19\" => .6e-19,\n      \".05E+44\" => .05E+44,\n      \".0034E-30\" => .0034E-30\n);\n/* Loop to check for above float values with var_export() */\necho \"\\n*** Output for float values ***\\n\";\nforeach($valid_floats as $key => $float_value) {\n    echo \"\\n-- Iteration: $key --\\n\";\n    var_export( $float_value );\n    echo \"\\n\";\n    var_export( $float_value, FALSE);\n    echo \"\\n\";\n    var_dump( var_export( $float_value, TRUE) );\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
