// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/bool_and_false.phpt
  it("Using both bool and false in a union", function () {
    expect(parser.parseCode("<?php\nfunction test(): bool|false {\n}\n?>")).toMatchSnapshot();
  });
});
