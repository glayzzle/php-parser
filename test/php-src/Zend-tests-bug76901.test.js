// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76901.phpt
  it("Bug #76901: method_exists on SPL iterator passthrough method corrupts memory", function () {
    expect(parser.parseCode("<?php\n$it = new ArrayIterator([1, 2, 3]);\n$it = new IteratorIterator($it);\nforeach ($it as $v) {\n    if (method_exists($it, 'offsetGet')) {\n        var_dump($it->offsetGet(0));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
