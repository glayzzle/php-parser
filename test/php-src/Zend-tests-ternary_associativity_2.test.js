// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ternary_associativity_2.phpt
  it("Forbidden nested ternary, case 2", function () {
    expect(parser.parseCode("<?php\n1 ?: 2 ? 3 : 4;\n?>")).toMatchSnapshot();
  });
});
