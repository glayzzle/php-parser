// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation3.phpt
  it("Test sprintf() function : usage variations - int formats with int values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : integer formats with integer values ***\\n\";\n// different valid  integer values\n$valid_ints = array(\n  0,\n  1,\n  -1,\n  -2147483648, // max negative integer value\n  -2147483647,\n  2147483647,  // max positive integer value\n  2147483640,\n  0x123B,      // integer as hexadecimal\n  0x12ab,\n  0Xfff,\n  0XFA,\n  -0x80000000, // max negative integer as hexadecimal\n  0x7fffffff,  // max positive integer as hexadecimal\n  0x7FFFFFFF,  // max positive integer as hexadecimal\n  0123,        // integer as octal\n  01,       // should be quivalent to octal 1\n  -020000000000, // max negative integer as octal\n  017777777777  // max positive integer as octal\n);\n// various integer formats\n$int_formats = array(\n  \"%d\", \"%ld\", \" %d\", \"%d \",\n  \"\\t%d\", \"\\n%d\", \"%4d\", \"%30d\",\n);\n$count = 1;\nforeach($valid_ints as $int_value) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($int_formats as $format) {\n    var_dump( sprintf($format, $int_value) );\n  }\n  $count++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
