// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_basic.phpt
  it("Test array_sum() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_sum() : basic functionality ***\\n\";\n// array with integer values\n$input = array(1, 2, 3, 4, 5);\necho \"-- array_sum() with integer array entries --\\n\";\nvar_dump( array_sum($input) );\n// array with float values\n$input = array(1.0, 2.2, 3.4, 4.6);\necho \"-- array_sum() with float array entries --\\n\";\nvar_dump( array_sum($input) );\n// array with integer and float values\n$input = array(1, 2.3, 4, 0.6, 10);\necho \"-- array_sum() with integer/float array entries --\\n\";\nvar_dump( array_sum($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
