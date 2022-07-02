// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug76505.phpt
  it("Bug #76505 (array_merge_recursive() is duplicating sub-array keys)", function () {
    expect(parser.parseCode("<?php\n$array1 = array(\n    'k' => array(\n        2 => 100,\n        98 => 200,\n    )\n);\n$array2 = array(\n    'k' => array(\n        64 => 300\n    )\n);\n$array3 = array_merge_recursive( $array1, $array2 );\nvar_dump($array3);\n?>")).toMatchSnapshot();
  });
});
