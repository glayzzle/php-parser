// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation3.phpt
  it("Test natcasesort() function : usage variations - different numeric types", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass arrays of numeric data to test how natcasesort re-orders the array\n */\necho \"*** Testing natcasesort() : usage variation ***\\n\";\n$inputs = array (\n  // negative/positive integers array\n  array(11, -11, 21, -21, 31, -31, 0, 41, -41),\n  // float value array\n  array(10.5, -10.5, 10.5e2, 10.6E-2, .5, .01, -.1),\n  // mixed value array\n  array(.0001, .0021, -.01, -1, 0, .09, 2, -.9, 10.6E-2, -10.6E-2, 33),\n  // array values contains minimum and maximum ranges\n  array(2147483647, 2147483648, -2147483647, -2147483648, -0, 0, -2147483649)\n);\n$iterator = 1;\nforeach ($inputs as $array_arg) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    var_dump(natcasesort($array_arg));\n    var_dump($array_arg);\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
