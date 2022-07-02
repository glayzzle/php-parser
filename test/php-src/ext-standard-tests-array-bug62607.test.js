// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug62607.phpt
  it("Bug #62607: array_walk_recursive move internal pointer", function () {
    expect(parser.parseCode("<?php\n$arr = array('a'=>'b');\necho 'Before -> '.current($arr).PHP_EOL;\narray_walk_recursive($arr, function(&$val){});\necho 'After -> '.current($arr);\n?>")).toMatchSnapshot();
  });
});
