// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_error.phpt
  it("Returns are covariant, but we don't allow the code due to class ordering", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function method() : B {}\n}\nclass B extends A {\n    public function method() : C {}\n}\nclass C extends B {\n}\nnew C;\n?>")).toMatchSnapshot();
  });
});
