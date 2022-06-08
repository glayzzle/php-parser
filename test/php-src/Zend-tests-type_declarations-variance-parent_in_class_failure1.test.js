// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/parent_in_class_failure1.phpt
  it("Use of parent inside a class that has / has no parent (failure case 1)", function () {
    expect(parser.parseCode("<?php\n// Illegal: A::parent is ill-defined\nclass A {\n    public function method(parent $x) {}\n}\nclass B extends A {\n    public function method(parent $x) {}\n}\n?>")).toMatchSnapshot();
  });
});
