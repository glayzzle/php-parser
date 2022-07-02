// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/object_and_static.phpt
  it("object and static are redundant", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function foo(): static|object {}\n}\n?>")).toMatchSnapshot();
  });
});
