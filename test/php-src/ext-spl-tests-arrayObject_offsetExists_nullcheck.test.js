// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_offsetExists_nullcheck.phpt
  it("SPL: ArrayObject::offsetExists() should return true for element containing NULL", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject(array('foo' => null));\nvar_dump($ao->offsetExists('foo'));\n?>")).toMatchSnapshot();
  });
});
