// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_001.phpt
  it("errmsg: Non-abstract method must contain body", function () {
    expect(() => parser.parseCode("<?php\nabstract class test {\n}\nclass Impl extends Test {\n    function Foo();\n}\necho \"Done\\n\";\n?>")).toThrowErrorMatchingSnapshot();
  });
});
