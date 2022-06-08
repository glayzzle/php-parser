// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/static_type_outside_class.phpt
  it("Static type outside class generates compile error", function () {
    expect(parser.parseCode("<?php\nfunction test(): static {}\n?>")).toMatchSnapshot();
  });
});
