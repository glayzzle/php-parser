// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/implicit_nullable_intersection_type.phpt
  it("Intersection types cannot be implicitly nullable", function () {
    expect(parser.parseCode("<?php\nfunction foo(X&Y $foo = null) {}\n?>")).toMatchSnapshot();
  });
});
