// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_028.phpt
  it("ArrayObject/Iterator on array with NUL bytes", function () {
    expect(parser.parseCode("<?php\n$array = [\n    \"\\0foo\" => \"bar\",\n];\n$it = new ArrayIterator($array);\nforeach ($it as $v) {\n    var_dump($v);\n}\n$obj = new ArrayObject($array);\nforeach ($obj as $v) {\n    var_dump($v);\n}\n$obj = new ArrayObject($it);\nforeach ($obj as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
