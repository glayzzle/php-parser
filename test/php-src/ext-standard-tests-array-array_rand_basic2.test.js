// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_rand_basic2.phpt
  it("Test array_rand() function : basic functionality - with associative array for 'input' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_rand() when associative array is passed to 'input' argument\n*/\necho \"*** Testing array_rand() : with associative array ***\\n\";\n// Initialise the 'input' and 'num_req' variables\n$input = array(\n  'one' => 1, 'two' => 2, 'three' => 3,\n  'FoUr' => 'four', '#5' => 5, 'SIX' => 'six',\n  \"seven\" => 7, \"#8\" => \"eight\", \"nine\" => \"NINE\"\n);\n$num_req = 6;\n// Calling array_rand() with optional argument\necho\"\\n-- with all default and optional arguments --\\n\";\nvar_dump( array_rand($input,$num_req) );\n// Calling array_rand() with default arguments\necho\"\\n-- with default argument --\\n\";\nvar_dump( array_rand($input) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
