// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_key_basic.phpt
  it("array_intersect_key(): Basic Test", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/standard/array.c\n*/\n$array1 = array('blue' => 1, 'red' => 2, 'green' => 3, 'purple' => 4);\n$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan' => 8);\nvar_dump(array_intersect_key($array1, $array2));\n?>")).toMatchSnapshot();
  });
});
