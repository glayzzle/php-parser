// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_variation3.phpt
  it("Test array_sum() function : usage variations - array with different float values", function () {
    expect(parser.parseCode("<?php\n/*\n * sum of array containing different float values\n*/\necho \"*** Testing array_sum() : array with different float values ***\\n\";\n// Simple float array\n$float_input = array( 1.1, 2.3, 0.0, 0.5, -2.3, -0.8, .5);\necho \"-- simple float array --\\n\";\nvar_dump( array_sum($float_input) );\n// float array with scientific notations\n$float_input = array( 1.2e2, 23.4e3, -4.1e2, 0.2e2, 2.1e-2, .5e3);\necho \"-- float array with scientific notations e and E --\\n\";\nvar_dump( array_sum($float_input) );\n$float_input = array( 1.2E2, 23.4E3, -4.1E2, 0.2E2, 2.1E-2, .5E3);\nvar_dump( array_sum($float_input) );\n// Mixed float array\n$float_input = array(\n  1.2,\n  0.5\n  -5.8,\n  6.334,\n  -0.65,\n  1.2e3,\n  -2.3e2,\n  5.56E3,\n  -3.82E-2\n);\necho \"-- Mixed float array --\\n\";\nvar_dump( array_sum($float_input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
