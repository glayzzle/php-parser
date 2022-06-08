// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62358.phpt
  it("Bug #62358 (Segfault when using traits a lot)", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public function foo() {\n        echo \"from T\";\n    }\n}\ninterface I {\n    public function foo();\n}\nabstract class A implements I{\n    use T;\n}\nclass B extends A {\n   public function foo($var) {\n   }\n}\n?>")).toMatchSnapshot();
  });
});
