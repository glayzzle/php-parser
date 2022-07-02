// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_rand_basic1.phpt
  it("Test array_rand() function : basic functionality - array with default keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_rand() when array with default keys is passed to 'input' argument\n*/\necho \"*** Testing array_rand() : array with default keys ***\\n\";\n// Initialise the 'input' and 'num_req' variables\n$input = array(10, 20, 30, 40, 50, 60, 70);\n$num_req = 6;\n// Calling array_rand() with optional argument\necho\"\\n-- with all default and optional arguments --\\n\";\nvar_dump( array_rand($input,$num_req) );\n// Calling array_rand() with default arguments\necho\"\\n-- with default argument --\\n\";\nvar_dump( array_rand($input) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
