// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/iterable_and_Traversable_2.phpt
  it("Using both iterable and Traversable, with extra classes", function () {
    expect(parser.parseCode("<?php\nfunction test(): iterable|Traversable|ArrayAccess {\n}\n?>")).toMatchSnapshot();
  });
});
