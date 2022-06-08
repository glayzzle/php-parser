// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation17.phpt
  it("Test vsprintf() function : usage variations - scientific formats with scientific values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test vprintf() when different scientific formats and scientific values\n * are passed to the '$format' and '$args' arguments of the function\n*/\necho \"*** Testing vprintf() : scientific formats and scientific values ***\\n\";\n// defining array of scientific formats\n$formats = array(\n  '%e %+e %-e',\n  '%le %4e %-4e',\n  '%10.4e %-10.4e %.4e',\n  '%\\'#20e %\\'20e %\\'$20e %\\'_20e',\n  '%3$e %4$e %1$e %2$e'\n);\n// Arrays of scientific values for the format defined in $format.\n// Each sub array contains scientific values which correspond to each format string in $format\n$args_array = array(\n  array(0, 1e0, \"10e2\" ),\n  array(2.2e2, 1000e-2, 1000e7),\n  array(-22e12, 10e20, 1.2e2),\n  array(1e1, +1e2, -1e3, \"1e2_\"),\n  array(3e3, 4e3, 1e3, 2e3)\n);\n// looping to test vprintf() with different scientific formats from the above $format array\n// and with signed and other types of  values from the above $args_array array\n$counter = 1;\nforeach($formats as $format) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
