// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation34_64bit.phpt
  it("Test sprintf() function : usage variations - hexa formats with integer values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : hexa formats with integer values ***\\n\";\n// array of integer values\n$integer_values = array(\n  0,\n  1,\n  -1,\n  -2147483648, // max negative integer value\n  -2147483647,\n  2147483647,  // max positive integer value\n  2147483640,\n  0x123B,      // integer as hexadecimal\n  0x12ab,\n  0Xfff,\n  0XFA,\n  -0x80000000, // max negative integer as hexadecimal\n  0x7fffffff,  // max positive integer as hexadecimal\n  0x7FFFFFFF,  // max positive integer as hexadecimal\n  0123,        // integer as octal\n  01,       // should be quivalent to octal 1\n  -020000000000, // max negative integer as octal\n  017777777777  // max positive integer as octal\n);\n// array of hexa formats\n$hexa_formats = array(\n  \"%x\", \"%xx\", \"%lx\", \" %x\", \"%x \",\n  \"\\t%x\", \"\\n%x\", \"%4x\", \"%30x\",\n);\n$count = 1;\nforeach($integer_values as $integer_value) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($hexa_formats as $format) {\n    var_dump( sprintf($format, $integer_value) );\n  }\n  $count++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
