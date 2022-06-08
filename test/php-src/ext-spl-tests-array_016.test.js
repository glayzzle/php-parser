// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_016.phpt
  it("SPL: ArrayIterator/Object and IteratorIterator", function () {
    expect(parser.parseCode("<?php\n$it = new ArrayIterator(range(0,3));\nforeach(new IteratorIterator($it) as $v)\n{\n    var_dump($v);\n}\n$it = new ArrayObject(range(0,3));\nforeach(new IteratorIterator($it) as $v)\n{\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
