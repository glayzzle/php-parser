// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68163.phpt
  it("Bug #68163: Using reference as object property name", function () {
    expect(parser.parseCode("<?php\n$obj = (object) ['foo' => 'bar'];\n$foo = 'foo';\n$ref =& $foo;\nvar_dump($obj->$foo);\n?>")).toMatchSnapshot();
  });
});
