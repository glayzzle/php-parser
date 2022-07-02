// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_change_key_case_variation6.phpt
  it("Test array_change_key_case() function : usage variations - multidimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_change_key_case() converts keys in multi-dimensional arrays\n */\necho \"*** Testing array_change_key_case() : usage variations ***\\n\";\n$input = array('English' => array('one' => 1, 'two' => 2, 'three' => 3),\n               'French'  => array('un' => 1, 'deux' => 2, 'trois' => 3),\n               'German'  => array('eins' => 1, 'zwei' => 2, 'drei' => 3));\necho \"\\n-- Pass a two-dimensional array as \\$input argument --\\n\";\nvar_dump(array_change_key_case($input, CASE_UPPER));\necho \"\\n-- Pass a sub-array as \\$input argument --\\n\";\nvar_dump(array_change_key_case($input['English'], CASE_UPPER));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
