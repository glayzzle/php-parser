// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/parent_in_class_failure2.phpt
  it("Use of parent inside a class that has / has no parent (failure case 2)", function () {
    expect(parser.parseCode("<?php\n// Illegal: B4::parent == A4 is subclass of A4::parent == P4 in contravariant position\nclass P4 {}\nclass A4 extends P4 {\n    public function method(parent $x) {}\n}\nclass B4 extends A4 {\n    public function method(parent $x) {}\n}\n?>")).toMatchSnapshot();
  });
});
