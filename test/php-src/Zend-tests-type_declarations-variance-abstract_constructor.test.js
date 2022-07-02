// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/abstract_constructor.phpt
  it("Variance check for abstract constructor", function () {
    expect(parser.parseCode("<?php\nclass X {\n}\nabstract class A {\n    abstract function __construct(X $x);\n}\nclass B extends A {\n    function __construct(object $x) {}\n}\nclass C extends B {\n    function __construct(Y $x) {}\n}\n?>")).toMatchSnapshot();
  });
});
