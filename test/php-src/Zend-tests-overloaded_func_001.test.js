// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/overloaded_func_001.phpt
  it("Overloaded function 001", function () {
    expect(parser.parseCode("<?php\n$o = new _ZendTestChildClass();\nvar_dump($o->test());\nvar_dump(_ZendTestClass::test());\n?>")).toMatchSnapshot();
  });
});
