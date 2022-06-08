// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug52861.phpt
  it("Bug #52861 (unset failes with ArrayObject and deep arrays)", function () {
    expect(parser.parseCode("<?php\n$arrayObject = new ArrayObject(array('foo' => array('bar' => array('baz' => 'boo'))));\nunset($arrayObject['foo']['bar']['baz']);\nprint_r($arrayObject->getArrayCopy());\n?>")).toMatchSnapshot();
  });
});
