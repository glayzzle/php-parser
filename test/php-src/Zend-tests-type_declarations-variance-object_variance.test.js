// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/object_variance.phpt
  it("Testing object's variance in inheritance", function () {
    expect(parser.parseCode("<?php\ninterface I1 {\n  function method1(I1 $o): object;\n}\ninterface I2 extends I1 {\n  function method1(object $o): I1;\n}\nfinal class C1 implements I2 {\n  function method1($o = null): self {\n    return $this;\n  }\n}\n$o = new C1();\necho get_class($o->method1());\n?>")).toMatchSnapshot();
  });
});
