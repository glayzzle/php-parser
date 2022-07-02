// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation47.phpt
  it("Test sprintf() function : usage variations - scientific formats with float values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : scientific formats with float values ***\\n\";\n// array of float values\n$float_values = array(\n  -2147483649,\n  2147483648,\n  -0x80000001, // float value, beyond max negative int\n  0x800000001, // float value, beyond max positive int\n  020000000001, // float value, beyond max positive int\n  -020000000001, // float value, beyond max negative int\n  0.0,\n  -0.1,\n  1.0,\n  1e5,\n  -1e5,\n  -1e5,\n  +1e5,\n  1e+5,\n  -1e-5,\n  1E8,\n  -1E9,\n  10.0000000000000000005,\n  10.5e+5\n);\n// array of scientific formats\n$scientific_formats = array(\n  \"%e\", \"%le\", \" %e\", \"%e \",\n  \"\\t%e\", \"\\n%e\", \"%4e\", \"%30e\",\n);\n$count = 1;\nforeach($float_values as $float_value) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($scientific_formats as $format) {\n    var_dump( sprintf($format, $float_value) );\n  }\n  $count++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
