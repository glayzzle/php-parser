// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation9.phpt
  it("Test sprintf() function : usage variations - float formats with float values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : float formats with float values ***\\n\";\n// array of float type values\n$float_values = array (\n-2147483649, // float value\n  2147483648,  // float value\n  -0x80000001, // float value, beyond max negative int\n  0x800000001, // float value, beyond max positive int\n  020000000001, // float value, beyond max positive int\n  -020000000001, // float value, beyond max negative int\n  0.0,\n  -0.1,\n  10.0000000000000000005,\n  10.5e+5,\n  1e5,\n  -1e5,\n  1e-5,\n  -1e-5,\n  1e+5,\n  -1e+5,\n  1E5,\n  -1E5,\n  1E+5,\n  -1E+5,\n  1E-5,\n  -1E-5,\n  .5e+7,\n  -.5e+7,\n  .6e-19,\n  -.6e-19,\n  .05E+44,\n  -.05E+44,\n  .0034E-30,\n  -.0034E-30\n);\n// various float formats\n$float_formats = array(\n  \"%f\", \"%lf\", \" %f\", \"%f \",\n  \"\\t%f\", \"\\n%f\", \"%4f\", \"%30f\",\n);\n$count = 1;\nforeach($float_values as $float_value) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($float_formats as $format) {\n    var_dump( sprintf($format, $float_value) );\n  }\n  $count++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
