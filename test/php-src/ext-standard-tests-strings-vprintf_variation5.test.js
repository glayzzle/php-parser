// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation5.phpt
  it("Test vprintf() function : usage variations - float formats with float values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test vprintf() when different float formats and float values are passed to\n * the '$format' and '$args' arguments of the function\n*/\necho \"*** Testing vprintf() : int formats with float values ***\\n\";\n// defining array of float formats\n$formats = array(\n  \"%f\",\n  \"%+f %-f %F\",\n  \"%lf %4f %-4f\",\n  \"%10.4f %-10.4F %04f %04.4f\",\n  \"%'#2f %'2f %'$2f %'_2f\",\n  \"%f %f %f %f\",\n  \"% %%f\",\n  '%3$f %4$f %1$f %2$f'\n);\n// Arrays of float values for the format defined in $format.\n// Each sub array contains float values which correspond to each format string in $format\n$args_array = array(\n  array(0.0),\n  array(-0.1, +0.1, +10.0000006),\n  array(2147483649, +2147483640, -2147483640),\n  array(2e5, 2e-5, -2e5, -2e-5),\n  array(0.2E5, -0.2e40, 0.2E-20, 0.2E+20),\n  array(0x123b, 0xfAb, 0123, 012),\n  array(1234.1234, -5678.5678),\n  array(3.33, 4.44, 1.11, 2.22)\n);\n// looping to test vprintf() with different float formats from the above $format array\n// and with float values from the above $args_array array\n$counter = 1;\nforeach($formats as $format) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
