// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/variance/invalid_003.phpt
  it("Invalid union type variance: Using parent of class in return type", function () {
    expect(parser.parseCode("<?php\nclass X {}\nclass Y extends X {}\nclass A {\n    public function method(): Y|string {}\n}\nclass B extends A {\n    public function method(): X|string {}\n}\n?>")).toMatchSnapshot();
  });
});
