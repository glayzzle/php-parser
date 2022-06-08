// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_variation11.phpt
  it("Test array_diff_uassoc() function : usage variation - Passing boolean indexed array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_uassoc() : usage variation ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$input_array = array(0 => '0', 1 => '1', -10 => '-10', 'true' => 1, 'false' => 0);\n$boolean_indx_array = array(true => 'boolt', false => 'boolf', TRUE => 'boolT', FALSE => 'boolF');\necho \"\\n-- Testing array_diff_key() function with float indexed array --\\n\";\nvar_dump( array_diff_uassoc($input_array, $boolean_indx_array, \"strcasecmp\") );\nvar_dump( array_diff_uassoc($boolean_indx_array, $input_array, \"strcasecmp\") );\n?>")).toMatchSnapshot();
  });
});
