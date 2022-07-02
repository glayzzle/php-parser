// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation13_64bit.phpt
  it("Test vprintf() function : usage variations - hexa formats with hexa values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test vprintf() when different hexa formats and hexa values are passed to\n * the '$format' and '$args' arguments of the function\n*/\necho \"*** Testing vprintf() : hexa formats with hexa values ***\\n\";\n// defining array of different hexa formats\n$formats = array(\n  \"%x\",\n  \"%+x %-x %X\",\n  \"%lx %4x %-4x\",\n  \"%10.4x %-10.4x %04x %04.4x\",\n  \"%'#2x %'2x %'$2x %'_2x\",\n  \"%x %x %x %x\",\n  \"% %%x\",\n  '%3$x %4$x %1$x %2$x'\n);\n// Arrays of hexa values for the format defined in $format.\n// Each sub array contains hexa values which correspond to each format string in $format\n$args_array = array(\n  array(0x0),\n  array(-0x1, 0x1, +0x22),\n  array(0x7FFFFFFF, +0x7000000, -0x80000000),\n  array(123456, 12345678, -1234567, 1234567),\n  array(1, 0x2222, 0333333, -0x44444444),\n  array(0x123b, 0xfAb, \"0xaxz\", 012),\n  array(0x1234, 0x34),\n  array(0x3, 0x4, 0x1, 0x2)\n);\n// looping to test vprintf() with different char octal from the above $format array\n// and with octal values from the above $args_array array\n$counter = 1;\nforeach($formats as $format) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
