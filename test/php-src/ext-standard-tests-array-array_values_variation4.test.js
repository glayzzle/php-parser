// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_values_variation4.phpt
  it("Test array_values() function : usage variations - multi-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_values when:\n * 1. Passed a two-dimensional array as $input argument\n * 2. Passed a sub-array as $input argument\n * 3. Passed an infinitely recursive multi-dimensional array\n */\necho \"*** Testing array_values() : usage variations ***\\n\";\n$input = array ('zero' => 'zero', 'un' => 'one', 'sub' => array (1, 2, 3));\necho \"\\n-- Array values of a two-dimensional array --\\n\";\nvar_dump(array_values($input));\necho \"\\n-- Array values of a sub-array --\\n\";\nvar_dump(array_values($input['sub']));\n// get an infinitely recursive array\n$input[] = &$input;\necho \"\\n-- Array values of an infinitely recursive array --\\n\";\nvar_dump(array_values($input));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
