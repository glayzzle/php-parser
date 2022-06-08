// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_key_variation6.phpt
  it("Test array_intersect_key() function : usage variation - Passing boolean indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_key() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(0 => '0', 1 => '1' , -10 => '-10');\n$boolean_indx_array = array(true => 'boolt', false => 'boolf', TRUE => 'boolT', FALSE => 'boolF');\necho \"\\n-- Testing array_intersect_key() function with boolean indexed array --\\n\";\nvar_dump( array_intersect_key($input_array, $boolean_indx_array) );\nvar_dump( array_intersect_key($boolean_indx_array,$input_array ) );\n?>")).toMatchSnapshot();
  });
});
