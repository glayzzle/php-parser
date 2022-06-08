// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/overloaded_func_002.phpt
  it("Overloaded function 002", function () {
    expect(parser.parseCode("<?php\n$a = new _ZendTestClass();\nvar_dump($a->{trim(\" test\")}());\n?>")).toMatchSnapshot();
  });
});
