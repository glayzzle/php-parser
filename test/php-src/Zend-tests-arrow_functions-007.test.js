// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/007.phpt
  it("Pretty printing for arrow functions", function () {
    expect(parser.parseCode("<?php\n// TODO We're missing parentheses for the direct call\nassert((fn() => false)());\nassert((fn&(int... $args): ?bool => $args[0])(false));\n?>")).toMatchSnapshot();
  });
});
