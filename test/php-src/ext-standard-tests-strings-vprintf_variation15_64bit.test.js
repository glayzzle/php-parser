// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation15_64bit.phpt
  it("Test vprintf() function : usage variations - unsigned formats with unsigned values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test vprintf() when different unsigned formats and unsigned values\n * are passed to the '$format' and '$args' arguments of the function\n*/\necho \"*** Testing vprintf() : unsigned formats and unsigned values ***\\n\";\n// defining array of unsigned formats\n$formats = array(\n  '%u %+u %-u',\n  '%lu %4u %-4u',\n  '%10.4u %-10.4u %.4u',\n  '%\\'#2u %\\'2u %\\'$2u %\\'_2u',\n  '%3$u %4$u %1$u %2$u'\n);\n// Arrays of unsigned values for the format defined in $format.\n// Each sub array contains unsigned values which correspond to each format string in $format\n$args_array = array(\n  array(1234567, 01234567, 0 ),\n  array(12345678900, 1234, 12345),\n  array(\"1234000\", 10e20, 1.2e2),\n  array(1, 0, 00, \"10_\"),\n  array(3, 4, 1, 2)\n);\n// looping to test vprintf() with different unsigned formats from the above $format array\n// and with signed and other types of  values from the above $args_array array\n$counter = 1;\nforeach($formats as $format) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result =  vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
