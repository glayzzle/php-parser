// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation10.phpt
  it("Test sprintf() function : usage variations - float formats with integer values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : float formats with integer values ***\\n\";\n// array of int type values\n$integer_values = array (\n  0,\n  1,\n  -1,\n  -2147483648, // max negative integer value\n  -2147483647,\n  2147483647,  // max positive integer value\n  2147483640,\n  0x123B,      // integer as hexadecimal\n  0x12ab,\n  0Xfff,\n  0XFA,\n  -0x80000000, // max negative integer as hexadecimal\n  0x7fffffff,  // max positive integer as hexadecimal\n  0x7FFFFFFF,  // max positive integer as hexadecimal\n  0123,        // integer as octal\n  01,       // should be quivalent to octal 1\n  -020000000000, // max negative integer as octal\n  017777777777  // max positive integer as octal\n);\n// various float formats\n$float_formats = array(\n  \"%f\", \"%lf\", \" %f\", \"%f \",\n  \"\\t%f\", \"\\n%f\", \"%4f\", \"%30f\",\n);\n$count = 1;\nforeach($integer_values as $int_value) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($float_formats as $format) {\n    // with two arguments\n    var_dump( sprintf($format, $int_value) );\n  }\n  $count++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
