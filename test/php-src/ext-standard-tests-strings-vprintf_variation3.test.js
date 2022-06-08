// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation3.phpt
  it("Test vprintf() function : usage variations - int formats with int values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test vprintf() when different int formats and int values are passed to\n * the '$format' and '$args' arguments of the function\n*/\necho \"*** Testing vprintf() : int formats with int values ***\\n\";\n// defining array of int formats\n$formats = array(\n  \"%d\",\n  \"%+d %-d\",\n  \"%ld %4d %-4d\",\n  \"%10.4d %-10.4d %04d %04.4d\",\n  \"%'#2d %'2d %'$2d %'_2d\",\n  \"%d %d %d %d\",\n  \"% %%d\",\n  '%3$d %4$d %1$d %2$d'\n);\n// Arrays of int values for the format defined in $format.\n// Each sub array contains int values which correspond to each format string in $format\n$args_array = array(\n  array(0),\n  array(-1, 1),\n  array(2147483647, +2147483640, -2147483640),\n  array(123456, 12345678, -1234567, 1234567),\n  array(111, 2222, 333333, 44444444),\n  array(0x123b, 0xfAb, 0123, 012),\n  array(1234, -5678),\n  array(3, 4, 1, 2)\n);\n// looping to test vprintf() with different int formats from the above $format array\n// and with int values from the above $args_array array\n$counter = 1;\nforeach($formats as $format) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
