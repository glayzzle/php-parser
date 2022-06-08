// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_variation4.phpt
  it("Test array_sum() function : usage variations - array with duplicate values", function () {
    expect(parser.parseCode("<?php\n/*\n* Checking array_sum() with integer and float array containing duplicate values\n*/\necho \"*** Testing array_sum() : array with duplicate values ***\\n\";\n// integer array with duplicate values\n$int_input = array( 2, 5, 7, 5, 0, -4, 2, 100);\necho \"-- With integer array --\\n\";\nvar_dump( array_sum($int_input) );\n// float array with duplicate values\n$float_input = array( 2.3, 1.9, -4.1, 0.5, 1.9, -4.1, 3.6, 0.5);\necho \"-- With float array --\\n\";\nvar_dump( array_sum($float_input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
