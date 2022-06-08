// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation11.phpt
  it("Test vprintf() function : usage variations - octal formats with octal values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test vprintf() when different octal formats and octal values are passed to\n * the '$format' and '$args' arguments of the function\n*/\necho \"*** Testing vprintf() : octal formats with octal values ***\\n\";\n// defining array of octal formats\n$formats = array(\n  \"%o\",\n  \"%+o %-o\",\n  \"%lo %4o %-4o\",\n  \"%10.4o %-10.4o %04o %04.4o\",\n  \"%'#2o %'2o %'$2o %'_2o\",\n  \"%o %o %o %o\",\n  \"%% %%o\",\n  '%3$o %4$o %1$o %2$o'\n);\n// Arrays of octal values for the format defined in $format.\n// Each sub array contains octal values which correspond to each format string in $format\n$args_array = array(\n  array(00),\n  array(-01, 01),\n  array(-020000000000, 017777777777, -017777777777),\n  array(0123456, 01234567, -01234567, 01234567),\n  array(0111, 02222, -0333333, -044444444),\n  array(0x123b, 0xfAb, 0123, 012),\n  array(01234, 0567),\n  array(03, 04, 01, 02)\n);\n// looping to test vprintf() with different octal formats from the above $formats array\n// and with octal values from the above $args_array array\n$counter = 1;\nforeach($formats as $format) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
