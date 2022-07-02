// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/variance/invalid_002.phpt
  it("Invalid union type variance: Removing argument union type", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function method(int|float $a) {}\n}\nclass B extends A {\n    public function method(int $a) {}\n}\n?>")).toMatchSnapshot();
  });
});
