// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/iterable_and_Traversable.phpt
  it("Using both iterable and Traversable", function () {
    expect(parser.parseCode("<?php\nfunction test(): iterable|Traversable {\n}\n?>")).toMatchSnapshot();
  });
});
