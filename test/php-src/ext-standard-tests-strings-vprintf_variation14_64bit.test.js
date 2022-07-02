// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation14_64bit.phpt
  it("Test vprintf() function : usage variations - hexa formats with non-hexa values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test vprintf() when different hexa formats and non-hexa values are passed to\n * the '$format' and '$args' arguments of the function\n*/\necho \"*** Testing vprintf() : hexa formats and non-hexa values ***\\n\";\n// defining array of different hexa formats\n$formats =\n    '%x %+x %-x\n    %lx %4x %-4x\n    %10.4x %-10.4x %.4x\n    %\\'#2x %\\'2x %\\'$2x %\\'_2x\n    %3$x %4$x %1$x %2$x';\n// Arrays of non hexa values for the format defined in $format.\n// Each sub array contains non hexa values which correspond to each format in $format\n$args_array = array(\n  // array of float values\n  array(2.2, .2, 10.2,\n        123456.234, -1234.6789, +1234.6789,\n        2e10, +2e12, 22e+12,\n        12345.780, 12.000000011111, -12.00000111111, -123456.234,\n        3.33, +4.44, 1.11,-2.22 ),\n  // array of int values\n  array(2, -2, +2,\n        123456, -12346789, +12346789,\n        123200, +20000, 22212,\n        12345780, 1211111, -12111111, -12345634,\n        3, +4, 1,-2 ),\n  // array of strings\n  array(\" \", ' ', 'hello',\n        '123hello', '-123hello', '+123hello',\n        \"\\12345678hello\", \"-\\12345678hello\", 'h123456ello',\n        \"1234hello\", \"hello\\0world\", \"NULL\", \"true\",\n        \"3\", \"4\", '1', '2'),\n  // different arrays\n  array( array(0), array(1, 2), array(-1, -1),\n         array(\"123\"), array('-123'), array(\"-123\"),\n         array(true), array(TRUE), array(FALSE),\n         array(\"123hello\"), array(\"1\", \"2\"), array('123hello'), array(12=>\"12twelve\"),\n         array(\"3\"), array(\"4\"), array(\"1\"), array(\"2\") ),\n  // array of boolean data\n  array( true, TRUE, false,\n         TRUE, FALSE, 1,\n         true, TRUE, FALSE,\n         0, 1, 1, 0,\n         1, TRUE, 0, FALSE),\n);\n// looping to test vprintf() with different hexa formats from the above $format array\n// and with non-hexa values from the above $args_array array\n$counter = 1;\nforeach($args_array as $args) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($formats, $args);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
