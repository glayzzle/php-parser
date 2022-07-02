// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/variance/invalid_001.phpt
  it("Invalid union type variance: Adding extra return type", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function method(): int {}\n}\nclass B extends A {\n    public function method(): int|float {}\n}\n?>")).toMatchSnapshot();
  });
});
