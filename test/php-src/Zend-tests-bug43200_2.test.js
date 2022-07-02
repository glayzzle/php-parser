// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43200_2.phpt
  it("Bug #43200.2 (Interface implementation / inheritance not possible in abstract classes)", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function foo();\n}\nabstract class B implements A {\n    abstract public function foo();\n}\nclass C extends B {\n    public function foo() {\n        echo 'works';\n    }\n}\n$o = new C();\n$o->foo();\n?>")).toMatchSnapshot();
  });
});
