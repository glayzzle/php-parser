// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_nullable_type.phpt
  it("Intersection type cannot be nullable", function () {
    expect(() => parser.parseCode("<?php\nfunction foo(): ?Countable&Iterator {}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
