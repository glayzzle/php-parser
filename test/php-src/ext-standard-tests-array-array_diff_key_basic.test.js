// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_key_basic.phpt
  it("Test array_diff_key() : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/standard/array.c\n*/\n$array1 = array('blue' => 1, 'red' => 2, 'green' => 3, 'purple' => 4);\n$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan' => 8);\nvar_dump(array_diff_key($array1, $array2));\n?>")).toMatchSnapshot();
  });
});
