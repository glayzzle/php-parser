// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_callable_abstract_method.phpt
  it("is_callable() on abstract method via object should return false", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n    abstract function foo();\n}\nclass B extends A {\n    function foo() {}\n}\n$foo = [new B, 'A::foo'];\nvar_dump(is_callable($foo));\n?>")).toMatchSnapshot();
  });
});
