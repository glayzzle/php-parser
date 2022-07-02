// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_static_type.phpt
  it("static type cannot take part in an intersection type", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function foo(): static&Iterator {}\n}\n?>")).toMatchSnapshot();
  });
});
