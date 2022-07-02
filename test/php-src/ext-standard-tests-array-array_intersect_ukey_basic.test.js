// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_ukey_basic.phpt
  it("array_intersect_ukey(): Basic test.", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/standard/array.c\n*/\nfunction key_compare_func($key1, $key2) {\n    if ($key1 == $key2) return 0;\n    else if ($key1 > $key2) return 1;\n    else return -1;\n}\n$array1 = array('blue' => 1, 'red' => 2, 'green' => 3, 'purple' => 4);\n$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan' => 8);\nvar_dump(array_intersect_ukey($array1, $array2, 'key_compare_func'));\n?>")).toMatchSnapshot();
  });
});
