// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject___construct_basic7.phpt
  it("SPL: ArrayObject::__construct: Using object with shared properties", function () {
    expect(parser.parseCode("<?php\n$y = 2;\n$x = 1;\n$a = array($y, $x);\n$o = (object)$a;\n$ao = new ArrayObject($o);\n$ao->asort();\nvar_dump($a, $o, $ao);\n?>")).toMatchSnapshot();
  });
});
