// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation9.phpt
  it("Test vprintf() function : usage variations - char formats with char values", function () {
    expect(parser.parseCode("<?php\n/*\n* Test vprintf() for char formats with an array of chars passed to the function\n*/\necho \"*** Testing vprintf() : char formats with char values ***\\n\";\n// defining array of char formats\n$formats = array(\n  \"%c\",\n  \"%+c %-c\",\n  \"%lc %4c %-4c\",\n  \"%10.4c %-10.4c %04c %04.4c\",\n  \"%'#2c %'2c %'$2c %'_2c\",\n  \"%c %c %c %c\",\n  \"% %%c\",\n  '%3$c %4$c %1$c %2$c'\n);\n// Arrays of char values for the format defined in $format.\n// Each sub array contains char values which correspond to each format string in $format\n$args_array = array(\n  array(0),\n  array('c', 67),\n  array(' ', -67, +67),\n  array(97, -97, 98, +98),\n  array(97, -97, 98, +98),\n  array(0x123b, 0xfAb, 0123, 012),\n  array(38, -1234),\n  array(67, 68, 65, 66)\n);\n// looping to test vprintf() with different char formats from the above $format array\n// and with char values from the above $args_array array\n$counter = 1;\nforeach($formats as $format) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
