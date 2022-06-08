// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ternary_associativity_3.phpt
  it("Forbidden nested ternary, case 3", function () {
    expect(parser.parseCode("<?php\n1 ? 2 : 3 ?: 4;\n?>")).toMatchSnapshot();
  });
});
